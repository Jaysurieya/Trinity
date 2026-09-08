"""
Human Detection Service — Trinetra Mine Safety Dashboard
-----------------------------------------------------------
Reads a live video feed (rover camera, RTSP stream, webcam, or
video file), runs YOLOv8 person detection on each frame, and
reports "humans detected" / "no humans detected" status changes
to your Node.js backend over Socket.io — same channel style as
your sensor data pipeline.

This script also serves a local MJPEG stream at http://localhost:8001/video_feed
so the processed camera feed can be displayed directly in the live widget on the Rover Control page.
"""

import base64
import threading
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

import cv2
import socketio
from ultralytics import YOLO

# ---------------- CONFIG ----------------
VIDEO_SOURCE = 0
# Examples:
#   0                                    -> laptop webcam (for testing)
#   "rtsp://192.168.1.50:8554/stream"    -> rover RTSP feed
#   "http://192.168.1.50:8080/video"     -> rover MJPEG feed
#   "test_footage.mp4"                   -> local test video

BACKEND_URL = "http://localhost:5000"   # your Node/Express + Socket.io server
STREAM_HOST = "0.0.0.0"
STREAM_PORT = 8001
CONFIDENCE_THRESHOLD = 0.5              # ignore low-confidence guesses
HEARTBEAT_SECONDS = 5                   # re-send status even if unchanged (proves feed is alive)
SHOW_PREVIEW = False                    # set True only if you want a separate local preview window
# -----------------------------------------

latest_frame = None
frame_lock = threading.Lock()
sio = socketio.Client()


@sio.event
def connect():
    print(f"Connected to backend at {BACKEND_URL}")


@sio.event
def disconnect():
    print("Disconnected from backend")


class StreamHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/health":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(b'{"status":"ok"}')
            return

        if self.path != "/video_feed":
            self.send_error(404)
            return

        self.send_response(200)
        self.send_header("Content-Type", "multipart/x-mixed-replace; boundary=--frame")
        self.end_headers()

        while True:
            with frame_lock:
                if latest_frame is None:
                    time.sleep(0.05)
                    continue
                encoded, buffer = cv2.imencode(".jpg", latest_frame, [cv2.IMWRITE_JPEG_QUALITY, 80])
                if not encoded:
                    time.sleep(0.05)
                    continue
                jpg_bytes = buffer.tobytes()

            self.wfile.write(b"--frame\r\n")
            self.wfile.write(b"Content-Type: image/jpeg\r\n\r\n")
            self.wfile.write(jpg_bytes)
            self.wfile.write(b"\r\n")
            self.wfile.flush()
            time.sleep(0.04)

    def log_message(self, format, *args):
        return


def serve_stream():
    print(f"Serving processed camera stream at http://{STREAM_HOST}:{STREAM_PORT}/video_feed")
    httpd = ThreadingHTTPServer((STREAM_HOST, STREAM_PORT), StreamHandler)
    httpd.serve_forever()


def annotate_frame(frame, detections):
    annotated = frame.copy()
    for detection in detections:
        x1, y1, x2, y2 = detection["bbox"]
        confidence = detection["confidence"]
        cv2.rectangle(annotated, (x1, y1), (x2, y2), (0, 255, 0), 2)
        cv2.putText(
            annotated,
            f"Person {confidence:.2f}",
            (x1, max(0, y1 - 10)),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.6,
            (0, 255, 0),
            2,
        )
    return annotated


def main():
    print("Connecting to backend...")
    sio.connect(BACKEND_URL)

    print("Loading detection model...")
    model = YOLO("yolov8n.pt")

    print(f"Opening video source: {VIDEO_SOURCE}")
    cap = cv2.VideoCapture(VIDEO_SOURCE)
    if not cap.isOpened():
        print("Could not open video source. Check VIDEO_SOURCE and try again.")
        return

    stream_thread = threading.Thread(target=serve_stream, daemon=True)
    stream_thread.start()

    last_status = None
    last_sent_time = 0

    try:
        while True:
            ret, frame = cap.read()
            if not ret:
                print("Feed ended or dropped, retrying...")
                time.sleep(1)
                continue

            results = model(frame, classes=[0], verbose=False)
            detections = []
            for r in results:
                for box in r.boxes:
                    conf = float(box.conf[0])
                    if conf >= CONFIDENCE_THRESHOLD:
                        x1, y1, x2, y2 = map(int, box.xyxy[0])
                        detections.append({"confidence": round(conf, 2), "bbox": [x1, y1, x2, y2]})

            annotated = annotate_frame(frame, detections)
            with frame_lock:
                global latest_frame
                latest_frame = annotated

            humans_detected = len(detections) > 0
            status_changed = humans_detected != last_status
            time_for_heartbeat = (time.time() - last_sent_time) >= HEARTBEAT_SECONDS

            if status_changed or time_for_heartbeat:
                payload = {
                    "type": "HUMAN_DETECTION",
                    "detected": humans_detected,
                    "count": len(detections),
                    "detections": detections,
                    "timestamp": time.strftime("%Y-%m-%dT%H:%M:%S"),
                }
                sio.emit("human-detection", payload)
                print(f"Reported: {'HUMANS DETECTED' if humans_detected else 'clear'} ({len(detections)} found)")
                last_status = humans_detected
                last_sent_time = time.time()

            if SHOW_PREVIEW:
                cv2.imshow("Human detection feed", annotated)
                if cv2.waitKey(1) == ord('q'):
                    break

    finally:
        cap.release()
        if SHOW_PREVIEW:
            cv2.destroyAllWindows()
        sio.disconnect()


if __name__ == "__main__":
    main()
