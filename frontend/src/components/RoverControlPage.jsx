import React, { useState } from "react";
import SensorCards from "./Dashboard/SensorCards";
import LiveCameraPanel from "./rover-control/LiveCameraPanel";
import ThermalCameraPanel from "./rover-control/ThermalCameraPanel";
import FullscreenModal from "./rover-control/FullscreenModal";
import MovementControls from "./rover-control/MovementControls";
import SpeedControl from "./rover-control/SpeedControl";
import CameraControl from "./rover-control/CameraControl";
import RoverControlStatus from "./rover-control/RoverControlStatus";
import "../App.css";

export default function RoverControlPage() {
  // Which feed (if any) is currently shown in the fullscreen modal: "live" | "thermal" | null
  const [expandedFeed, setExpandedFeed] = useState(null);

  return (
    <>
      {/* Reused as-is from the dashboard page */}
      <SensorCards />

      {/* Two camera widgets in EQUAL proportions (1fr / 1fr grid, see App.css .rover-camera-row) */}
      <div className="rover-camera-row">
        <LiveCameraPanel onExpand={() => setExpandedFeed("live")} />
        <ThermalCameraPanel onExpand={() => setExpandedFeed("thermal")} />
      </div>

      <div className="rover-control-row">
        <MovementControls />

        <div className="rover-control-stack">
          <SpeedControl />
          <CameraControl />
        </div>

        <RoverControlStatus />
      </div>

      {/* Centered, medium-large fullscreen preview of whichever feed was expanded */}
      {expandedFeed && (
        <FullscreenModal feed={expandedFeed} onClose={() => setExpandedFeed(null)} />
      )}
    </>
  );
}
