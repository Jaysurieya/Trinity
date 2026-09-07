import React from "react";
import { movementButtons } from "../../data";
import { SettingsIcon, ArrowUpIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, StopSquareIcon, DangerIcon } from "../Icons";

const DIRECTION_ICON = {
  up: ArrowUpIcon,
  down: ArrowDownIcon,
  left: ArrowLeftIcon,
  right: ArrowRightIcon,
  stop: StopSquareIcon,
};

export default function MovementControls() {
  const handleMove = (direction) => {
    // Hook this up to your rover movement command endpoint / websocket
    console.log("Move:", direction);
  };

  const handleEmergencyStop = () => {
    console.log("EMERGENCY STOP triggered");
  };

  return (
    <section className="panel movement-panel">
      <div className="panel-header">
        <SettingsIcon size={18} />
        <h2>Movement Controls</h2>
      </div>

      <div className="movement-grid">
        {movementButtons.map((btn) => {
          const DirIcon = DIRECTION_ICON[btn.direction];
          return (
            <button
              key={btn.id}
              type="button"
              className={`movement-btn movement-btn--${btn.direction}`}
              onClick={() => handleMove(btn.direction)}
              aria-label={btn.direction}
            >
              <DirIcon size={20} />
            </button>
          );
        })}
      </div>

      <button type="button" className="emergency-stop-btn" onClick={handleEmergencyStop}>
        <DangerIcon size={18} />
        EMERGENCY STOP
      </button>
    </section>
  );
}
