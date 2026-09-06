import React from "react";
import { recentAlerts } from "../data";
import { DangerIcon, WarningIcon, InfoIcon, SuccessIcon } from "./Icons";

const ICON_MAP = {
  danger: DangerIcon,
  warning: WarningIcon,
  info: InfoIcon,
  success: SuccessIcon,
};

export default function RecentAlerts() {
  return (
    <section className="panel recent-alerts-panel">
      <div className="panel-header">
        <h2>Recent Alerts</h2>
        <button type="button" className="link-btn">
          View All
        </button>
      </div>
      <div className="alerts-list">
        {recentAlerts.map((alert) => {
          const AlertIconEl = ICON_MAP[alert.icon];
          return (
            <div className="alert-row" key={alert.id}>
              <AlertIconEl size={20} />
              <div className="alert-row-text">
                <span className="alert-title">{alert.title}</span>
                <span className="alert-zone">{alert.zone}</span>
              </div>
              <span className="alert-time">{alert.time}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
