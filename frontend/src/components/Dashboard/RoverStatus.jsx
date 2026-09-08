import React from "react";
import { roverStatus } from "../../data";
import { BatteryIcon, CpuIcon, GaugeIcon, WifiIcon, ClockIcon } from "../Icons";

const ICON_MAP = {
  battery: BatteryIcon,
  cpu: CpuIcon,
  gauge: GaugeIcon,
  wifi: WifiIcon,
  clock: ClockIcon,
};

export default function RoverStatus() {
  return (
    <section className="panel rover-status-panel">
      <div className="panel-header">
        <h2>Rover Status</h2>
      </div>
      <div className="rover-status-list">
        {roverStatus.map((row) => {
          const RowIcon = ICON_MAP[row.icon];
          return (
            <div className="rover-status-row" key={row.id}>
              <div className="rover-status-label">
                <RowIcon size={17} color="#93a4c3" />
                <span>{row.label}</span>
              </div>
              {row.type === "bar" ? (
                <div className="rover-status-bar-wrap">
                  <div className="rover-status-bar-track">
                    <div className="rover-status-bar-fill" style={{ width: `${row.value}%` }} />
                  </div>
                  <span className="rover-status-bar-value">{row.value}%</span>
                </div>
              ) : (
                <span className="rover-status-value">{row.value}</span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
