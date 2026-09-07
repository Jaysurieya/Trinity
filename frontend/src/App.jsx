// import React, { useState } from "react";
// import Sidebar from "./components/Dashboard/Sidebar";
// import TopBar from "./components/TopBar";
// import DashboardPage from "./components/Dashboard";
// import RoverControlPage from "./components/RoverControlPage";
// import "./App.css";

// export default function App() {
//   const [activeItem, setActiveItem] = useState("dashboard");

//   return (
//     <div className="app-shell">
//       <Sidebar activeItem={activeItem} onSelect={setActiveItem} />

//       <main className="main-content">
//         <TopBar activeItem={activeItem} />

//         {/* Swap the page body based on the sidebar selection.
//             Add more branches here as more sidebar pages are built out. */}
//         {activeItem === "rover-control" ? <RoverControlPage /> : <DashboardPage />}
//       </main>
//     </div>
//   );
// }


import React, { useState } from "react";
import Sidebar from "./components/Dashboard/Sidebar";
import TopBar from "./components/TopBar";
import Dashboard from "./components/Dashboard";
import RoverControlPage from "./components/RoverControlPage";
import SensorData from "./components/SensorData";
import "./App.css";

export default function App() {
  const [activeItem, setActiveItem] = useState("dashboard");

  const renderPage = () => {
    switch (activeItem) {
      case "rover-control":
        return <RoverControlPage />;
      case "sensor-data":
        return <SensorData />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-shell">
      <Sidebar activeItem={activeItem} onSelect={setActiveItem} />

      <main className="main-content">
        <TopBar activeItem={activeItem} />
        {renderPage()}
      </main>
    </div>
  );
}
