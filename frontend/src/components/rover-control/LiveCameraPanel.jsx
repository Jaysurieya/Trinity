import React from "react";
import { Video } from "lucide-react";

export default function LiveCameraPanel({ onExpand, humanStatus }) {
  // Local MJPEG stream served by the Python detection service.
  const DETECTION_VIDEO_URL = "http://localhost:8001/video_feed";
  const isDetected = Boolean(humanStatus?.detected);

  return (
    <div className="panel camera-feed-panel">
      <div className="panel-header">
        <div className="camera-feed-title">
          <Video size={18} />
          <h2>Live Optical Feed</h2>
        </div>
        <div className={`camera-status-badge ${isDetected ? "camera-status-badge--danger" : "camera-status-badge--safe"}`}>
          <div className="live-dot"></div>
          {isDetected ? `HUMANS DETECTED (${humanStatus?.count || 0})` : "NO HUMANS DETECTED"}
        </div>
      </div>

      <div className="camera-feed-viewport">
        {/* THIS IS THE MAGIC LINE: Embed the stream as an image */}
        <img
          src={DETECTION_VIDEO_URL}
          alt="Rover Live Feed"
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
        />

        <div className="camera-feed-footer">
          <span>Logitech C270 | 30 FPS</span>
          <div className="camera-feed-controls">
            <button className="camera-feed-btn" onClick={onExpand}>
              ⛶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}