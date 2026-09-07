import React from "react";
import { sensorTopStats } from "../../data";
import { RadioIcon, ClockIcon, DatabaseIcon, ThermometerIcon } from "../Icons";

const ICON_MAP = {
  radio: RadioIcon,
  clock: ClockIcon,
  database: DatabaseIcon,
  thermometer: ThermometerIcon,
};

export default function TopStats() {
  return (
    <section className="sd-top-stats">
      {sensorTopStats.map((stat) => {
        const StatIcon = ICON_MAP[stat.icon];
        const isLive = stat.id === "live";
        return (
          <div className="sd-stat-card" key={stat.id}>
            <div className={`sd-stat-icon${isLive ? " sd-stat-icon--live" : ""}`}>
              <StatIcon size={20} />
            </div>
            <div className="sd-stat-body">
              <div className={`sd-stat-value${isLive ? " sd-stat-value--live" : ""}`}>
                {stat.value}
                {stat.suffix ? <span className="sd-stat-suffix"> {stat.suffix}</span> : null}
                {stat.unit ? <span className="sd-stat-unit"> {stat.unit}</span> : null}
              </div>
              <div className="sd-stat-label">{stat.label}</div>
              {stat.id === "online" && (
                <div className="sd-stat-progress-track">
                  <div className="sd-stat-progress-fill" style={{ width: "0%" }} />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}
