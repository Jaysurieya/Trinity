import React from "react";
import { Video } from "lucide-react";

export default function LiveCameraPanel({ onExpand }) {
  // Your Raspberry Pi Camera Stream URL
  const RASPBERRY_PI_VIDEO_URL = "http://10.170.91.9:5000/video_feed";

  return (
    <div className="panel camera-feed-panel">
      <div className="panel-header">
        <div className="camera-feed-title">
          <Video size={18} />
          <h2>Live Optical Feed</h2>
        </div>
        <div className="live-badge">
          <div className="live-dot"></div> LIVE
        </div>
      </div>

      <div className="camera-feed-viewport">
        {/* THIS IS THE MAGIC LINE: Embed the stream as an image */}
        <img
          src={RASPBERRY_PI_VIDEO_URL}
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