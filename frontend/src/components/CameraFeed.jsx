import React, { useState } from "react";
import { ExpandIcon } from "./Icons";

export default function CameraFeed() {
  const [activeTab, setActiveTab] = useState("thermal");

  return (
    <div className="camera-column">
      <section className="panel camera-panel">
        <div className="panel-header">
          <h2>Live Camera Feed</h2>
          <button type="button" className="icon-btn" aria-label="Expand">
            <ExpandIcon size={16} />
          </button>
        </div>

        <div className="camera-tabs">
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

        <div className="camera-viewport">
          {/* Replace with the real <video>/<img> live stream element */}
          <span>Live camera feed will appear here</span>
        </div>
      </section>

      <section className="panel camera-panel">
        <div className="panel-header">
          <h2>Rover Camera (RGB)</h2>
          <button type="button" className="icon-btn" aria-label="Expand">
            <ExpandIcon size={16} />
          </button>
        </div>
        <div className="camera-viewport">
          {/* Replace with the real <video>/<img> live stream element */}
          <span>Rover camera feed will appear here</span>
        </div>
      </section>
    </div>
  );
}
