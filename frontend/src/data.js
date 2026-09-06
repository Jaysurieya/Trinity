// Static mock data for the Trinetra dashboard.
// Replace with live sensor/rover data from your backend / websocket feed.

export const sensorReadings = [
  {
    id: "methane",
    label: "Methane (CH₄)",
    icon: "flame",
    value: "--",
    unit: "%LEL",
    status: "Normal",
    sub: "Limit: 5 %LEL",
  },
  {
    id: "co",
    label: "Carbon Monoxide (CO)",
    icon: "cloud",
    value: "--",
    unit: "ppm",
    status: "Normal",
    sub: "Limit: 50 ppm",
  },
  {
    id: "h2s",
    label: "Hydrogen Sulfide (H₂S)",
    icon: "skull",
    value: "--",
    unit: "ppm",
    status: "Normal",
    sub: "Limit: 10 ppm",
  },
  {
    id: "o2",
    label: "Oxygen (O₂)",
    icon: "o2",
    value: "--",
    unit: "%",
    status: "Normal",
    sub: "Range: 19.5 – 23.5%",
  },
  {
    id: "temp",
    label: "Temperature",
    icon: "thermometer",
    value: "--",
    unit: "°C",
    status: "Normal",
    sub: "",
  },
  {
    id: "humidity",
    label: "Humidity",
    icon: "droplet",
    value: "--",
    unit: "%",
    status: "Normal",
    sub: "",
  },
];

export const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "home" },
  { id: "live-feed", label: "Live Feed", icon: "video" },
  { id: "sensor-data", label: "Sensor Data", icon: "sliders" },
  { id: "mine-map", label: "Mine Map", icon: "map" },
  { id: "victim-detection", label: "Victim Detection", icon: "pin" },
  { id: "rover-control", label: "Rover Control", icon: "truck" },
  { id: "alerts-logs", label: "Alerts & Logs", icon: "alert" },
  { id: "settings", label: "Settings", icon: "settings" },
];

export const mapLegend = [
  { icon: "rover", color: "#22c55e", label: "Rover (Current Position)" },
  { icon: "dashed-explored", color: "#3b82f6", label: "Explored Path" },
  { icon: "dashed-unexplored", color: "#64748b", label: "Unexplored Area" },
  { icon: "victim", color: "#ef4444", label: "Detected Victim" },
  { icon: "hazard", color: "#ef4444", label: "Hazard Zone" },
  { icon: "relay", color: "#3b82f6", label: "Relay Node (LoRa)" },
  { icon: "dock", color: "#60a5fa", label: "Docking Station" },
];

export const roverStatus = [
  { id: "battery", label: "Battery Level", icon: "battery", value: 78, type: "bar" },
  { id: "mode", label: "Rover Mode", icon: "cpu", value: "Exploration", type: "text" },
  { id: "speed", label: "Speed", icon: "gauge", value: "0.5 m/s", type: "text" },
  { id: "connection", label: "Connection", icon: "wifi", value: "LoRa Mesh (3 nodes)", type: "text" },
  { id: "uptime", label: "Uptime", icon: "clock", value: "01:24:17", type: "text" },
];

export const recentAlerts = [
  { id: 1, icon: "danger", title: "High Methane Level Detected", zone: "Zone B3", time: "14:21" },
  { id: 2, icon: "warning", title: "Unusual Vibration Detected", zone: "Zone A2", time: "14:18" },
  { id: 3, icon: "info", title: "Relay Node Deployed", zone: "Node #3", time: "14:14" },
  { id: 4, icon: "success", title: "Victim Signature Detected", zone: "Zone C1", time: "14:12" },
  { id: 5, icon: "info", title: "Rover Docked for Charging", zone: "Docking Station", time: "13:45" },
];

export const aiAnalysis = [
  { id: "env", icon: "success", label: "Environment Status", value: "Safe for Further Exploration", valueColor: "#22c55e" },
  { id: "rockfall", icon: "bar", label: "Rockfall Risk", value: "Low Risk", valueColor: "#22c55e" },
  { id: "victims", icon: "person", label: "Possible Victim(s)", value: "1 Detected (Zone C1)", valueColor: "#e2e8f0" },
  { id: "action", icon: "target", label: "Recommended Action", value: "Continue Exploration & Validate Victim Location", valueColor: "#e2e8f0" },
];
