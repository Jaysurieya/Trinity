import React from "react";
import { cameraFeeds } from "../../data";
import { CameraIcon, BulbIcon, ExpandIcon } from "../Icons";

export default function LiveCameraPanel({ onExpand }) {
  const feed = cameraFeeds.live;

  return (
    <section className="panel camera-feed-panel">
      <div className="panel-header">
        <div className="camera-feed-title">
          <CameraIcon size={18} />
          <h2>{feed.title}</h2>
        </div>
        <span className="live-badge">
          <span className="live-dot" />
          Live
        </span>
      </div>

      <div className="camera-feed-viewport">
        {/* Replace with the real <video>/<img> live stream element */}
        <span className="camera-feed-placeholder">Live camera feed will appear here</span>

        <div className="camera-feed-footer">
          <span>
            Resolution: {feed.resolution} &nbsp;|&nbsp; FPS: {feed.fps}
          </span>
          <div className="camera-feed-controls">
            <button type="button" className="camera-feed-btn" aria-label="Toggle light">
              <BulbIcon size={16} />
            </button>
            <button type="button" className="camera-feed-btn" aria-label="Take snapshot">
              <CameraIcon size={16} />
            </button>
            <button type="button" className="camera-feed-btn" aria-label="Expand" onClick={onExpand}>
              <ExpandIcon size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
