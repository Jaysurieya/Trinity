import React, { useEffect } from "react";
import { cameraFeeds } from "../../data";

export default function FullscreenModal({ feed, onClose }) {
  const info = cameraFeeds[feed];

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="fullscreen-overlay" onClick={onClose}>
      {/* Centered, medium-large panel — stopPropagation so clicking inside doesn't close it */}
      <div className="fullscreen-modal" onClick={(e) => e.stopPropagation()}>
        <div className="fullscreen-modal-header">
          <h2>{info.title}</h2>
          <button type="button" className="fullscreen-close-btn" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="fullscreen-modal-viewport">
          {/* Replace with the real enlarged <video>/<img> stream element */}
          <span className="camera-feed-placeholder">
            {info.title} — enlarged view will appear here
          </span>
        </div>

        <div className="fullscreen-modal-footer">
          Resolution: {info.resolution} &nbsp;|&nbsp; FPS: {info.fps}
        </div>
      </div>
    </div>
  );
}
