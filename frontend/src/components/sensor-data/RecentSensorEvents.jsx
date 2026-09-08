import React from "react";
import { recentSensorEvents } from "../../data";

export default function RecentSensorEvents() {
  return (
    <section className="panel sd-events-panel">
      <div className="panel-header">
        <h2>Recent Sensor Events</h2>
        <button type="button" className="link-btn">
          View All
        </button>
      </div>

      <table className="sd-events-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Sensor</th>
            <th>Event</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {recentSensorEvents.map((row, i) => (
            <tr key={i}>
              <td>{row.time}</td>
              <td>{row.sensor}</td>
              <td>{row.event}</td>
              <td>
                <span className="sd-status-chip">{row.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
