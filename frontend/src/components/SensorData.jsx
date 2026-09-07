import React, { useMemo, useState } from "react";
import { sensorDetailList } from "../data";
import TopStats from "./sensor-data/TopStats";
import SensorSearchBar from "./sensor-data/SensorSearchBar";
import SensorReadingGrid from "./sensor-data/SensorReadingGrid";
import SensorHealthOverview from "./sensor-data/SensorHealthOverview";
import RecentSensorEvents from "./sensor-data/RecentSensorEvents";
import SensorSystemInfo from "./sensor-data/SensorSystemInfo";
import "./SensorData.css";

export default function SensorData() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  const filteredSensors = useMemo(() => {
    return sensorDetailList.filter((sensor) => {
      const matchesSearch =
        searchTerm.trim() === "" ||
        sensor.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sensor.code.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === "all" || sensor.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, category]);

  return (
    <>
      <TopStats />

      <section className="panel sd-readings-panel">
        <SensorSearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          category={category}
          onCategoryChange={setCategory}
        />
        <SensorReadingGrid sensors={filteredSensors} />
      </section>

      <div className="sd-bottom-row">
        <SensorHealthOverview />
        <RecentSensorEvents />
        <SensorSystemInfo />
      </div>
    </>
  );
}
