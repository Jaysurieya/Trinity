import React, { useState, useMemo } from "react";
import { alertsLogsData } from "../data";
import TopStats from "./alerts-logs/TopStats";
import AlertsToolbar from "./alerts-logs/AlertsToolbar";
import AlertsTable from "./alerts-logs/AlertsTable";
import "./AlertsLogs.css";

export default function AlertsLogs() {
    const [activeTab, setActiveTab] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    // Derived stats for the top cards
    const totalAlerts = alertsLogsData.length;
    const criticalCount = alertsLogsData.filter(log => log.type === "critical").length;
    const warningCount = alertsLogsData.filter(log => log.type === "warning").length;

    // Filter logic
    const filteredLogs = useMemo(() => {
        return alertsLogsData.filter(log => {
            const matchesTab = activeTab === "all" || log.type === activeTab;
            const matchesSearch =
                log.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                log.zone.toLowerCase().includes(searchQuery.toLowerCase()) ||
                log.id.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesTab && matchesSearch;
        });
    }, [activeTab, searchQuery]);

    return (
        <>
            <TopStats
                total={totalAlerts}
                critical={criticalCount}
                warning={warningCount}
            />

            <section className="panel al-panel">
                <AlertsToolbar
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                />
                <AlertsTable logs={filteredLogs} />
            </section>
        </>
    );
}