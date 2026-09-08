import React from "react";
import { Sliders, User, Bell, Cpu, Wifi, Shield } from "lucide-react";

export default function SettingsSidebar({ activeTab, onTabChange }) {
    const tabs = [
        { id: "general", label: "General System", icon: Sliders },
        { id: "account", label: "Account & Shift", icon: User },
        { id: "notifications", label: "Alerts & Notifications", icon: Bell },
        { id: "rover", label: "Rover Defaults", icon: Cpu },
        { id: "network", label: "LoRa & Connectivity", icon: Wifi },
        { id: "security", label: "Security & Access", icon: Shield },
    ];

    return (
        <nav className="st-sidebar">
            {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                    <button
                        key={tab.id}
                        className={`st-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                        onClick={() => onTabChange(tab.id)}
                    >
                        <Icon size={18} />
                        {tab.label}
                    </button>
                );
            })}
        </nav>
    );
}