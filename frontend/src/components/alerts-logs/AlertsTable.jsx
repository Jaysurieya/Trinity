import React from "react";
import { ShieldAlert, AlertTriangle, Info } from "lucide-react";

export default function AlertsTable({ logs }) {
    const getBadgeIcon = (type) => {
        switch (type) {
            case "critical": return <ShieldAlert size={14} />;
            case "warning": return <AlertTriangle size={14} />;
            default: return <Info size={14} />;
        }
    };

    return (
        <div className="al-table-container">
            <table className="al-table">
                <thead>
                    <tr>
                        <th>Severity</th>
                        <th>Log ID</th>
                        <th>Event Message</th>
                        <th>Location / Zone</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.length > 0 ? (
                        logs.map((log) => (
                            <tr key={log.id}>
                                <td>
                                    <span className={`al-badge ${log.type}`}>
                                        {getBadgeIcon(log.type)}
                                        {log.type.charAt(0).toUpperCase() + log.type.slice(1)}
                                    </span>
                                </td>
                                <td style={{ color: "var(--text-muted)", fontSize: "12px" }}>{log.id}</td>
                                <td>
                                    <div className="al-message-title">{log.title}</div>
                                    <div className="al-message-desc">{log.desc}</div>
                                </td>
                                <td>{log.zone}</td>
                                <td className="al-time-col">
                                    <div>{log.time}</div>
                                    <div style={{ fontSize: "11px", marginTop: "2px" }}>{log.date}</div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="al-empty">
                                No logs found matching your search criteria.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}