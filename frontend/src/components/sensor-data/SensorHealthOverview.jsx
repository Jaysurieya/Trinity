import React from "react";
import { sensorHealthOverview } from "../../data";

export default function SensorHealthOverview() {
  return (
    <section className="panel sd-health-panel">
      <div className="panel-header">
        <h2>Sensor Health Overview</h2>
      </div>

      <div className="sd-health-body">
        <div className="sd-donut-wrap">
          {/* Neutral ring shown until real health data is wired in */}
          <svg viewBox="0 0 120 120" className="sd-donut">
            <circle cx="60" cy="60" r="48" fill="none" stroke="#1f2937" strokeWidth="14" />
            <circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="#22c55e"
              strokeWidth="14"
              strokeDasharray="301.6"
              strokeDashoffset="0"
              opacity="0.25"
              transform="rotate(-90 60 60)"
            />
          </svg>
          <div className="sd-donut-center">
            <span className="sd-donut-value">{sensorHealthOverview.centerLabel}</span>
            <span className="sd-donut-sub">{sensorHealthOverview.centerSub}</span>
          </div>
        </div>

        <div className="sd-health-legend">
          {sensorHealthOverview.legend.map((item) => (
            <div className="sd-legend-row" key={item.id}>
              <span className="sd-legend-dot" style={{ background: item.color }} />
              <span className="sd-legend-label">{item.label}</span>
              <span className="sd-legend-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
