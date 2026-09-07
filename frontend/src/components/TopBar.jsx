// import React, { useEffect, useState } from "react";
// import { Settings } from 'lucide-react';

// function formatDateTime(date) {
//   const dateStr = date
//     .toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
//     .replace(",", "");
//   const timeStr = date.toLocaleTimeString("en-GB", { hour12: false });
//   return { dateStr, timeStr };
// }

// export default function TopBar() {
//   const [now, setNow] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const { dateStr, timeStr } = formatDateTime(now);

//   return (
//     <header className="topbar">
//       <div className="topbar-titles">
//         <h1>
//           AI-Powered <span className="accent">Underground Mine Safety, Monitoring and Rescue System</span>
//         </h1>
//         <p>Real-Time Insights. Safer Decisions. More Lives Saved.</p>
//       </div>

//       <div className="topbar-status">
//         <span className="topbar-datetime">
//           {dateStr} &nbsp; {timeStr}
//         </span>
//         <span className="topbar-connection">
//           <span className="status-dot" />
//           Connected
//         </span>
//         <button type="button" className="topbar-settings" aria-label="Settings">
//           <Settings size={20} />
//         </button>
//       </div>
//     </header>
//   );
// }



import React, { useEffect, useState } from "react";
import { SettingsIcon } from "./Icons";

function formatDateTime(date) {
  const dateStr = date
    .toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
    .replace(",", "");
  const timeStr = date.toLocaleTimeString("en-GB", { hour12: false });
  return { dateStr, timeStr };
}

// Subtitle swaps depending on which sidebar page is active.
const SUBTITLES = {
  "rover-control": "Real-Time Control. Safer Operations. More Lives Saved.",
};
const DEFAULT_SUBTITLE = "Real-Time Insights. Safer Decisions. More Lives Saved.";

export default function TopBar({ activeItem }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const { dateStr, timeStr } = formatDateTime(now);
  const subtitle = SUBTITLES[activeItem] || DEFAULT_SUBTITLE;

  return (
    <header className="topbar">
      <div className="topbar-titles">
        <h1>
          AI-Powered <span className="accent">Underground Mine Safety, Monitoring and Rescue System</span>
        </h1>
        <p>{subtitle}</p>
      </div>

      <div className="topbar-status">
        <span className="topbar-datetime">
          {dateStr} &nbsp; {timeStr}
        </span>
        <span className="topbar-connection">
          <span className="status-dot" />
          Connected
        </span>
        <button type="button" className="topbar-settings" aria-label="Settings">
          <SettingsIcon size={20} />
        </button>
      </div>
    </header>
  );
}
