import React, { useState } from "react";
import { cameraControls } from "../../data";
import { CameraIcon, RefreshIcon } from "../Icons";

export default function CameraControl() {
  const [values, setValues] = useState(
    Object.fromEntries(cameraControls.map((c) => [c.id, c.value]))
  );

  const updateValue = (id, val) => setValues((prev) => ({ ...prev, [id]: val }));

  const handleReset = () => {
    setValues(Object.fromEntries(cameraControls.map((c) => [c.id, c.value])));
  };

  const handleSnapshot = () => {
    console.log("Take Snapshot clicked");
  };

  return (
    <section className="panel camera-control-panel">
      <div className="panel-header">
        <CameraIcon size={18} />
        <h2>Camera Control</h2>
      </div>

      <div className="camera-control-sliders">
        {cameraControls.map((control) => (
          <div className="slider-row slider-row--labeled" key={control.id}>
            <span className="slider-label">{control.label}</span>
            <input
              type="range"
              className="styled-slider"
              min={control.min}
              max={control.max}
              step={1}
              value={values[control.id]}
              onChange={(e) => updateValue(control.id, Number(e.target.value))}
            />
            <span className="slider-value slider-value--narrow">
              {values[control.id]}{control.unit}
            </span>
          </div>
        ))}
      </div>

      <div className="camera-control-actions">
        <button type="button" className="secondary-btn" onClick={handleReset}>
          <RefreshIcon size={15} />
          Reset Camera
        </button>
        <button type="button" className="secondary-btn" onClick={handleSnapshot}>
          <CameraIcon size={15} />
          Take Snapshot
        </button>
      </div>
    </section>
  );
}
