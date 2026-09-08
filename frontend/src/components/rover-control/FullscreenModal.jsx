import React, { useEffect } from "react";
import { X, Video, Activity } from "lucide-react";

export default function FullscreenModal({ feed, onClose, humanStatus }) {
  // Prevent background scrolling when the modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // ---------------------------------------------------------
  // CAMERA STREAM URLs
  // Replace these with your actual Raspberry Pi IP addresses!
  // ---------------------------------------------------------
  const feedData = {
    live: {
      title: "Live Optical Feed",
      icon: <Video size={18} color="var(--accent-blue)" />,
      url: "http://localhost:8001/video_feed" // Local processed detection feed
    },
    thermal: {
      title: "Thermal / Night Vision",
      icon: <Activity size={18} color="var(--amber)" />,
      // If your MLX90640 thermal script runs on a different port (e.g., 5001), update it here:
      url: "http://10.170.91.9:5001/thermal_feed"
    }
  };

  const currentFeed = feedData[feed];
  const isDetected = Boolean(humanStatus?.detected);

  if (!currentFeed) return null;

  return (
    <div className="fullscreen-overlay" onClick={onClose}>
      {/* e.stopPropagation() prevents clicking inside the modal from closing it */}
      <div className="fullscreen-modal" onClick={(e) => e.stopPropagation()}>

        <div className="fullscreen-modal-header">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {currentFeed.icon}
            <h2>{currentFeed.title}</h2>
            <div className="live-badge" style={{ marginLeft: "12px" }}>
              <div className="live-dot"></div> LIVE
            </div>
          </div>
          <button className="fullscreen-close-btn" onClick={onClose} aria-label="Close">
            <X size={24} />
          </button>
        </div>

        <div className="fullscreen-modal-viewport" style={{ padding: 0, height: "70vh" }}>
          <img
            src={currentFeed.url}
            alt={currentFeed.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain", // 'contain' prevents cropping the video
              backgroundColor: "#000"
            }}
          />
        </div>

        <div className="fullscreen-modal-footer">
          <span>Source: Raspberry Pi (Node Alpha)</span>
          <span>
            Status: {isDetected ? `Humans Detected (${humanStatus?.count || 0})` : "No humans detected"} | Format: MJPEG
          </span>
        </div>

      </div>
    </div>
  );
}