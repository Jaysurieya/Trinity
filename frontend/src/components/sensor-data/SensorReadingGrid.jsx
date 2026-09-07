import React from "react";
import SensorReadingCard from "./SensorReadingCard";

export default function SensorReadingGrid({ sensors }) {
  if (sensors.length === 0) {
    return <div className="sd-empty-state">No sensors match your search or filter.</div>;
  }

  return (
    <div className="sd-grid">
      {sensors.map((sensor) => (
        <SensorReadingCard sensor={sensor} key={sensor.id} />
      ))}
    </div>
  );
}
