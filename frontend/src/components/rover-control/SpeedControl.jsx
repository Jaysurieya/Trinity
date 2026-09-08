import React, { useState } from "react";
import { speedControl } from "../../data";
import { GaugeIcon } from "../Icons";

export default function SpeedControl() {
  const [speed, setSpeed] = useState(speedControl.value);

  return (
    <section className="panel speed-control-panel">
      <div className="panel-header">
        <GaugeIcon size={18} />
        <h2>Speed Control</h2>
      </div>

      <div className="slider-row">
        <input
          type="range"
          className="styled-slider"
          min={speedControl.min}
          max={speedControl.max}
          step={speedControl.step}
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
        <span className="slider-value">{speed.toFixed(1)} {speedControl.unit}</span>
      </div>

      <div className="slider-marks">
        {speedControl.marks.map((mark) => (
          <span key={mark}>{mark}</span>
        ))}
      </div>
    </section>
  );
}
