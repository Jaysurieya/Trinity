import React, { useState } from "react";
import { roverControlStatusRows } from "../../data";
import {
  PulseIcon,
  BatteryIcon,
  CpuIcon,
  GaugeIcon,
  WifiIcon,
  ClockIcon,
  BulbIcon,
  WrenchIcon,
  LoraDispenserIcon,
  SpeakerIcon,
} from "../Icons";

const ICON_MAP = {
  battery: BatteryIcon,
  cpu: CpuIcon,
  gauge: GaugeIcon,
  wifi: WifiIcon,
  clock: ClockIcon,
  bulb: BulbIcon,
  wrench: WrenchIcon,
  lora: LoraDispenserIcon,
  speaker: SpeakerIcon,
};

function ToggleRow({ row }) {
  const [on, setOn] = useState(row.value);
  return (
    <button
      type="button"
      className={`toggle-switch${on ? " on" : ""}`}
      onClick={() => setOn((v) => !v)}
      aria-pressed={on}
    >
      <span className="toggle-switch-label">{on ? row.onLabel : row.offLabel}</span>
      <span className="toggle-switch-thumb" />
    </button>
  );
}

export default function RoverControlStatus() {
  return (
    <section className="panel rover-status-panel">
      <div className="panel-header">
        <PulseIcon size={18} />
        <h2>Rover Status</h2>
      </div>

      <div className="rover-status-list">
        {roverControlStatusRows.map((row) => {
          const RowIcon = ICON_MAP[row.icon];
          return (
            <div className="rover-status-row" key={row.id}>
              <div className="rover-status-label">
                <RowIcon size={17} color="#93a4c3" />
                <span>{row.label}</span>
              </div>

              {row.type === "bar" && (
                <div className="rover-status-bar-wrap">
                  <div className="rover-status-bar-track">
                    <div className="rover-status-bar-fill" style={{ width: `${row.value}%` }} />
                  </div>
                  <span className="rover-status-bar-value">{row.value}%</span>
                </div>
              )}

              {row.type === "text" && <span className="rover-status-value">{row.value}</span>}

              {row.type === "toggle" && <ToggleRow row={row} />}
            </div>
          );
        })}
      </div>
    </section>
  );
}
