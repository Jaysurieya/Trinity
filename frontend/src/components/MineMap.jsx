import React from "react";
import { mapLegend } from "../data";
import { RoverMarkerIcon, HazardMarkerIcon, DockMarkerIcon, RelayMarkerIcon, PinIcon } from "./Icons";

const LEGEND_ICON = {
  rover: RoverMarkerIcon,
  victim: PinIcon,
  hazard: HazardMarkerIcon,
  relay: RelayMarkerIcon,
  dock: DockMarkerIcon,
};

function LegendRow({ item }) {
  if (item.icon === "dashed-explored" || item.icon === "dashed-unexplored") {
    return (
      <div className="legend-row">
        <span className="legend-dash" style={{ borderColor: item.color }} />
        <span>{item.label}</span>
      </div>
    );
  }
  const LegendIcon = LEGEND_ICON[item.icon];
  return (
    <div className="legend-row">
      <LegendIcon size={16} color={item.color} />
      <span>{item.label}</span>
    </div>
  );
}

export default function MineMap() {
  return (
    <section className="panel mine-map-panel">
      <div className="panel-header">
        <h2>Underground Mine Map (Live)</h2>
      </div>
      <div className="mine-map-body">
        <div className="mine-map-legend">
          {mapLegend.map((item, i) => (
            <LegendRow item={item} key={i} />
          ))}
        </div>
        {/* Replace with the real live map / canvas rendering */}
        <div className="mine-map-canvas" aria-hidden="true" />
      </div>
    </section>
  );
}
