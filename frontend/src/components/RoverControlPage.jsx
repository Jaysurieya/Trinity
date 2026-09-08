import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import SensorCards from "./Dashboard/SensorCards";
import LiveCameraPanel from "./rover-control/LiveCameraPanel";
import ThermalCameraPanel from "./rover-control/ThermalCameraPanel";
import FullscreenModal from "./rover-control/FullscreenModal";
import MovementControls from "./rover-control/MovementControls";
import SpeedControl from "./rover-control/SpeedControl";
import CameraControl from "./rover-control/CameraControl";
import RoverControlStatus from "./rover-control/RoverControlStatus";
import "../App.css";

const defaultHumanStatus = { detected: false, count: 0, timestamp: null };

export default function RoverControlPage() {
  // Which feed (if any) is currently shown in the fullscreen modal: "live" | "thermal" | null
  const [expandedFeed, setExpandedFeed] = useState(null);
  const [humanStatus, setHumanStatus] = useState(defaultHumanStatus);

  useEffect(() => {
    const socket = io("http://localhost:5000", {
      transports: ["polling", "websocket"],
    });

    socket.on("connect", () => {
      console.log("Connected to backend for rover monitoring");
    });

    socket.on("human-status-update", (payload) => {
      setHumanStatus({
        detected: Boolean(payload?.detected),
        count: Number(payload?.count || 0),
        timestamp: payload?.timestamp || new Date().toISOString(),
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      {/* Reused as-is from the dashboard page */}
      <SensorCards />

      {/* Two camera widgets in EQUAL proportions (1fr / 1fr grid, see App.css .rover-camera-row) */}
      <div className="rover-camera-row">
        <LiveCameraPanel
          onExpand={() => setExpandedFeed("live")}
          humanStatus={humanStatus}
        />
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
        <FullscreenModal
          feed={expandedFeed}
          onClose={() => setExpandedFeed(null)}
          humanStatus={humanStatus}
        />
      )}
    </>
  );
}
