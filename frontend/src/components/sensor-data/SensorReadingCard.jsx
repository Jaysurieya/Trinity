import React from "react";
import {
  FlameIcon,
  CloudIcon,
  SkullIcon,
  O2Badge,
  ThermometerIcon,
  DropletIcon,
  GaugeIcon,
  PulseIcon,
  MicIcon,
  CameraIcon,
  CubeIcon,
} from "../Icons";

const ICON_MAP = {
  flame: FlameIcon,
  cloud: CloudIcon,
  skull: SkullIcon,
  o2: O2Badge,
  thermometer: ThermometerIcon,
  droplet: DropletIcon,
  gauge: GaugeIcon,
  pulse: PulseIcon,
  mic: MicIcon,
  camera: CameraIcon,
  cube: CubeIcon,
};

export default function SensorReadingCard({ sensor }) {
  const SensorIcon = ICON_MAP[sensor.icon];

  return (
    <div className="sd-card">
      <div className="sd-card-header">
        <SensorIcon size={20} />
        <div>
          <div className="sd-card-label">{sensor.label}</div>
          <div className="sd-card-unit-hint">{sensor.unit}</div>
        </div>
      </div>

      <div className="sd-card-value">{sensor.value}</div>
      <div className="sd-card-status">{sensor.status}</div>
      <div className="sd-card-sub">{sensor.sub}</div>

      {/* Curved sparkline intentionally omitted per project spec */}

      <div className="sd-card-footer">
        <span>ID: {sensor.code}</span>
        <span className={sensor.connected ? "sd-connected-text" : "sd-disconnected-text"}>
          {sensor.connected ? "Connected" : "Disconnected"}
        </span>
        <span>--:--:--</span>
      </div>

      {/* The "light like" connection indicator strip — green if connected, red if not */}
      <div className={`sd-connection-glow${sensor.connected ? " is-connected" : " is-disconnected"}`} />
    </div>
  );
}
