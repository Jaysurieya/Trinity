import React, { useState } from "react";
import SettingsSidebar from "./settings/SettingsSidebar";
import SettingsContent from "./settings/SettingsContent";
import "./Settings.css";

export default function Settings() {
    const [activeTab, setActiveTab] = useState("general");

    return (
        <div className="st-layout">
            <SettingsSidebar activeTab={activeTab} onTabChange={setActiveTab} />
            <SettingsContent activeTab={activeTab} />
        </div>
    );
}