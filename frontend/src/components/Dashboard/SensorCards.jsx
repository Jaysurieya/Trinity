import React from "react";
import { sensorReadings } from "../../data";
import { FlameIcon, CloudIcon, SkullIcon, ThermometerIcon, DropletIcon, O2Badge } from "../Icons";

const ICON_MAP = {
  flame: FlameIcon,
  cloud: CloudIcon,
  skull: SkullIcon,
  thermometer: ThermometerIcon,
  droplet: DropletIcon,
  o2: O2Badge,
};

export default function SensorCards() {
  return (
    <section className="sensor-row">
      {sensorReadings.map((sensor) => {
        const SensorIcon = ICON_MAP[sensor.icon];
        return (
          <div className="sensor-card" key={sensor.id}>
            <div className="sensor-card-header">
              <SensorIcon size={22} />
              <span className="sensor-card-label">{sensor.label}</span>
            </div>
            <div className="sensor-card-value">
              {sensor.value} <span className="sensor-card-unit">{sensor.unit}</span>
            </div>
            <div className="sensor-card-status">{sensor.status}</div>
            {sensor.sub && <div className="sensor-card-sub">{sensor.sub}</div>}
          </div>
        );
      })}
    </section>
  );
}
