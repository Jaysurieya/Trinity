import React from "react";
import { ShieldAlert, AlertTriangle, Activity, Info } from "lucide-react";

export default function TopStats({ total, critical, warning }) {
    return (
        <div className="al-top-stats">
            <div className="al-stat-card">
                <div className="al-stat-icon critical">
                    <ShieldAlert size={20} />
                </div>
                <div className="al-stat-body">
                    <div className="al-stat-value">{critical}</div>
                    <div className="al-stat-label">Critical Alerts</div>
                </div>
            </div>
            <div className="al-stat-card">
                <div className="al-stat-icon warning">
                    <AlertTriangle size={20} />
                </div>
                <div className="al-stat-body">
                    <div className="al-stat-value">{warning}</div>
                    <div className="al-stat-label">Active Warnings</div>
                </div>
            </div>
            <div className="al-stat-card">
                <div className="al-stat-icon total">
                    <Activity size={20} />
                </div>
                <div className="al-stat-body">
                    <div className="al-stat-value">{total}</div>
                    <div className="al-stat-label">Total Events Today</div>
                </div>
            </div>
            <div className="al-stat-card">
                <div className="al-stat-icon info">
                    <Info size={20} />
                </div>
                <div className="al-stat-body">
                    <div className="al-stat-value">System Normal</div>
                    <div className="al-stat-label">Current Status</div>
                </div>
            </div>
        </div>
    );
}