import React, { useState } from "react";

export default function SettingsContent({ activeTab }) {
    // Mock states for toggles
    const [toggles, setToggles] = useState({
        smsAlerts: true,
        emailAlerts: true,
        soundAlarms: false,
        autoReturn: true,
        telemetryLog: true,
    });

    const handleToggle = (key) => {
        setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const renderContent = () => {
        switch (activeTab) {
            case "general":
                return (
                    <div className="st-section">
                        <div className="st-header">
                            <h2>General System Settings</h2>
                            <p>Configure base dashboard preferences and data retention.</p>
                        </div>

                        <div className="st-form-group">
                            <label className="st-label">Dashboard Display Name</label>
                            <input type="text" className="st-input" defaultValue="Trinetra Command Center - Zone Alpha" />
                        </div>

                        <div className="st-form-group">
                            <label className="st-label">Timezone</label>
                            <select className="st-select" defaultValue="ist">
                                <option value="ist">India Standard Time (IST)</option>
                                <option value="utc">Coordinated Universal Time (UTC)</option>
                            </select>
                        </div>

                        <div className="st-form-group">
                            <label className="st-label">Sensor Data Retention (Days)</label>
                            <input type="number" className="st-input" defaultValue={30} />
                            <span className="st-subtext">Logs older than this will be archived to cold storage.</span>
                        </div>
                    </div>
                );

            case "notifications":
                return (
                    <div className="st-section">
                        <div className="st-header">
                            <h2>Alerts & Notifications</h2>
                            <p>Manage how and when you receive critical mine safety warnings.</p>
                        </div>

                        <div className="st-form-group row">
                            <div>
                                <div className="st-label">Critical SMS Alerts</div>
                                <div className="st-subtext">Send SMS to shift supervisors on CH4/CO spikes.</div>
                            </div>
                            <button
                                className={`toggle-switch ${toggles.smsAlerts ? "on" : ""}`}
                                onClick={() => handleToggle("smsAlerts")}
                            >
                                <span className="toggle-switch-label">{toggles.smsAlerts ? "ON" : "OFF"}</span>
                                <span className="toggle-switch-thumb"></span>
                            </button>
                        </div>
                        <div className="st-divider"></div>

                        <div className="st-form-group row">
                            <div>
                                <div className="st-label">Email Daily Summaries</div>
                                <div className="st-subtext">Receive automated end-of-shift reports.</div>
                            </div>
                            <button
                                className={`toggle-switch ${toggles.emailAlerts ? "on" : ""}`}
                                onClick={() => handleToggle("emailAlerts")}
                            >
                                <span className="toggle-switch-label">{toggles.emailAlerts ? "ON" : "OFF"}</span>
                                <span className="toggle-switch-thumb"></span>
                            </button>
                        </div>
                        <div className="st-divider"></div>

                        <div className="st-form-group row">
                            <div>
                                <div className="st-label">Dashboard Sound Alarms</div>
                                <div className="st-subtext">Play audible siren sound for critical UI alerts.</div>
                            </div>
                            <button
                                className={`toggle-switch ${toggles.soundAlarms ? "on" : ""}`}
                                onClick={() => handleToggle("soundAlarms")}
                            >
                                <span className="toggle-switch-label">{toggles.soundAlarms ? "ON" : "OFF"}</span>
                                <span className="toggle-switch-thumb"></span>
                            </button>
                        </div>
                    </div>
                );

            case "rover":
                return (
                    <div className="st-section">
                        <div className="st-header">
                            <h2>Rover Default Configurations</h2>
                            <p>Set baseline behaviors for the Trinetra exploration rover.</p>
                        </div>

                        <div className="st-form-group">
                            <label className="st-label">Default Exploration Speed (m/s)</label>
                            <input type="number" step="0.1" className="st-input" defaultValue={0.5} />
                        </div>

                        <div className="st-form-group row" style={{ marginTop: "12px" }}>
                            <div>
                                <div className="st-label">Auto-Return on Low Battery</div>
                                <div className="st-subtext">Rover will automatically head to docking station at 15% battery.</div>
                            </div>
                            <button
                                className={`toggle-switch ${toggles.autoReturn ? "on" : ""}`}
                                onClick={() => handleToggle("autoReturn")}
                            >
                                <span className="toggle-switch-label">{toggles.autoReturn ? "ON" : "OFF"}</span>
                                <span className="toggle-switch-thumb"></span>
                            </button>
                        </div>
                    </div>
                );

            default:
                return (
                    <div className="st-section">
                        <div className="st-header">
                            <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Settings</h2>
                            <p>Configuration panel in development.</p>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="panel st-content">
            {renderContent()}

            <div className="st-divider" style={{ marginTop: "auto", paddingTop: "24px" }}></div>
            <div className="st-actions">
                <button className="st-btn primary">Save Changes</button>
                <button className="st-btn secondary">Reset to Defaults</button>
            </div>
        </div>
    );
}