import React, { useState } from "react";
import { sensorCategories } from "../../data";
import { SearchIcon, ChevronDownIcon, RefreshIcon } from "../Icons";

export default function SensorSearchBar({ searchTerm, onSearchChange, category, onCategoryChange, onRefresh }) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    if (isRefreshing) return;
    setIsRefreshing(true);
    onRefresh && onRefresh();
    // Purely a UI affordance — swap this for a real refetch of sensor data.
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <div className="sd-toolbar">
      <div>
        <h2 className="sd-toolbar-title">Sensor Readings (Live)</h2>
        <p className="sd-toolbar-subtitle">Real-time data from all onboard sensors</p>
      </div>

      <div className="sd-toolbar-controls">
        <div className="sd-search-box">
          <SearchIcon size={16} color="#6b7690" />
          <input
            type="text"
            placeholder="Search sensor..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className="sd-select-box">
          <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
            {sensorCategories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
          <ChevronDownIcon size={14} color="#93a4c3" />
        </div>

        <button type="button" className="sd-refresh-btn" onClick={handleRefresh}>
          <span className={isRefreshing ? "sd-spin" : ""}>
            <RefreshIcon size={15} color="#ffffff" />
          </span>
          Refresh
        </button>
      </div>
    </div>
  );
}
