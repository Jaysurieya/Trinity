import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import SensorCards from "./components/SensorCards";
import MineMap from "./components/MineMap";
import CameraFeed from "./components/CameraFeed";
import RoverStatus from "./components/RoverStatus";
import RecentAlerts from "./components/RecentAlerts";
import AIAnalysis from "./components/AIAnalysis";
import "./App.css";

export default function App() {
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleGenerateReport = () => {
    // Hook this up to your report-generation endpoint.
    console.log("Generate Detailed Report clicked");
  };

  return (
    <div className="app-shell">
      <Sidebar activeItem={activeItem} onSelect={setActiveItem} />

      <main className="main-content">
        <TopBar />
        <SensorCards />

        <div className="middle-row">
          <MineMap />
          <CameraFeed />
        </div>

        <div className="bottom-row">
          <RoverStatus />
          <RecentAlerts />
          <AIAnalysis onGenerateReport={handleGenerateReport} />
        </div>
      </main>
    </div>
  );
}
