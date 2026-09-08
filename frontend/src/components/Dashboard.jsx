// import React, { useState } from "react";
// import Sidebar from "./Dashboard/Sidebar";
// import TopBar from "./TopBar";
// import SensorCards from "./Dashboard/SensorCards";
// import MineMap from "./Dashboard/MineMap";
// import CameraFeed from "./Dashboard/CameraFeed";
// import RoverStatus from "./Dashboard/RoverStatus";
// import RecentAlerts from "./Dashboard/RecentAlerts";
// import AIAnalysis from "./Dashboard/AIAnalysis";
// import "./App.css";

// export default function App() {
//   const [activeItem, setActiveItem] = useState("dashboard");

//   const handleGenerateReport = () => {
//     // Hook this up to your report-generation endpoint.
//     console.log("Generate Detailed Report clicked");
//   };

//   return (
//     <div className="app-shell">
//       <Sidebar activeItem={activeItem} onSelect={setActiveItem} />

//       <main className="main-content">
//         <TopBar />
//         <SensorCards />

//         <div className="middle-row">
//           <MineMap />
//           <CameraFeed />
//         </div>

//         <div className="bottom-row">
//           <RoverStatus />
//           <RecentAlerts />
//           <AIAnalysis onGenerateReport={handleGenerateReport} />
//         </div>
//       </main>
//     </div>
//   );
// }


import React from "react";
import SensorCards from "./Dashboard/SensorCards";
import MineMap from "./Dashboard/MineMap";
import CameraFeed from "./Dashboard/CameraFeed";
import RoverStatus from "./Dashboard/RoverStatus";
import RecentAlerts from "./Dashboard/RecentAlerts";
import AIAnalysis from "./Dashboard/AIAnalysis";

export default function DashboardPage() {
  const handleGenerateReport = () => {
    console.log("Generate Detailed Report clicked");
  };

  return (
    <>
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
    </>
  );
}
