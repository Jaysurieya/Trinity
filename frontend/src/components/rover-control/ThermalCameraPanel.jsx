import React, { useState } from "react";
import { cameraFeeds } from "../../data";
import { ThermalIcon, CameraIcon, ExpandIcon } from "../Icons";

export default function ThermalCameraPanel({ onExpand }) {
  const feed = cameraFeeds.thermal;
  const [activeTab, setActiveTab] = useState("thermal");

  return (
    <section className="panel camera-feed-panel">
      <div className="panel-header">
        <div className="camera-feed-title">
          <ThermalIcon size={18} />
          <h2>{feed.title}</h2>
        </div>
        <div className="camera-tabs camera-tabs--inline">
          <button
            type="button"
            className={`camera-tab${activeTab === "thermal" ? " active" : ""}`}
            onClick={() => setActiveTab("thermal")}
          >
            Thermal View
          </button>
          <button
            type="button"
            className={`camera-tab${activeTab === "night" ? " active" : ""}`}
            onClick={() => setActiveTab("night")}
          >
            Night Vision
          </button>
        </div>
      </div>

      <div className="camera-feed-viewport camera-feed-viewport--with-legend">
        {/* Replace with the real <video>/<img> live stream element */}
        <span className="camera-feed-placeholder">Thermal / night vision feed will appear here</span>

        {/* Temperature scale legend strip */}
        <div className="thermal-legend">
          <span>{feed.legend.max}</span>
          <div className="thermal-legend-bar" />
          <span>{feed.legend.min}</span>
        </div>

        <div className="camera-feed-footer">
          <span>
            Resolution: {feed.resolution} &nbsp;|&nbsp; FPS: {feed.fps}
          </span>
          <div className="camera-feed-controls">
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
