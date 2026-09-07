import React from "react";
import { sensorSystemInfo } from "../../data";
import { GridIcon, WifiIcon, WifiOffIcon, ClockIcon } from "../Icons";

const ICON_MAP = {
  grid: GridIcon,
  wifi: WifiIcon,
  wifiOff: WifiOffIcon,
  clock: ClockIcon,
};

export default function SensorSystemInfo() {
  return (
    <section className="panel sd-system-info-panel">
      <div className="panel-header">
        <h2>Sensor System Info</h2>
      </div>

      <div className="sd-system-info-list">
        {sensorSystemInfo.map((row) => {
          const RowIcon = ICON_MAP[row.icon];
          return (
            <div className="sd-system-info-row" key={row.id}>
              <div className="sd-system-info-label">
                <RowIcon size={16} color="#93a4c3" />
                <span>{row.label}</span>
              </div>
              <span className="sd-system-info-value">{row.value}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
