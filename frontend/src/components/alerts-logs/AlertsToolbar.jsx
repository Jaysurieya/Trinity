import React from "react";
import { Search, Filter, Download } from "lucide-react";

export default function AlertsToolbar({ activeTab, onTabChange, searchQuery, onSearchChange }) {
    return (
        <div className="al-toolbar">
            <div className="al-tabs">
                <button
                    className={`al-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                    onClick={() => onTabChange('all')}
                >
                    All Logs
                </button>
                <button
                    className={`al-tab-btn ${activeTab === 'critical' ? 'active' : ''}`}
                    onClick={() => onTabChange('critical')}
                >
                    Critical
                </button>
                <button
                    className={`al-tab-btn ${activeTab === 'warning' ? 'active' : ''}`}
                    onClick={() => onTabChange('warning')}
                >
                    Warnings
                </button>
                <button
                    className={`al-tab-btn ${activeTab === 'info' ? 'active' : ''}`}
                    onClick={() => onTabChange('info')}
                >
                    System Info
                </button>
            </div>

            <div className="al-controls">
                <div className="al-search">
                    <Search size={16} color="var(--text-muted)" />
                    <input
                        type="text"
                        placeholder="Search alerts by ID, title, or zone..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>
                <button className="al-action-btn">
                    <Filter size={16} /> Filter
                </button>
                <button className="al-action-btn">
                    <Download size={16} /> Export
                </button>
            </div>
        </div>
    );
}