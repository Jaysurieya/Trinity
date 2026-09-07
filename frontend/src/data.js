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
  // { id: "live-feed", label: "Live Feed", icon: "video" },
  { id: "sensor-data", label: "Sensor Data", icon: "sliders" },
  // { id: "mine-map", label: "Mine Map", icon: "map" },
  // { id: "victim-detection", label: "Victim Detection", icon: "pin" },
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


// =========================================================
// Rover Control page data
// =========================================================

export const cameraFeeds = {
  live: { title: "Rover Camera (Live Feed)", resolution: "1280 x 720", fps: 30 },

  thermal: {
    title: "Thermal / Night Vision",
    resolution: "1280 x 720",
    fps: 30,
    legend: { max: "50°C", min: "0°C" },
  },
};

export const movementButtons = [
  { id: "up", direction: "up" },
  { id: "left", direction: "left" },
  { id: "stop", direction: "stop" },
  { id: "right", direction: "right" },
  { id: "down", direction: "down" },
];

export const speedControl = {
  min: 0,
  max: 2,
  step: 0.1,
  value: 0.5,
  unit: "m/s",
  marks: [0, 0.5, 1.0, 2.0],
};

export const cameraControls = [
  { id: "tilt", label: "Tilt", value: 0, unit: "°", min: -90, max: 90 },
  { id: "pan", label: "Pan", value: 0, unit: "°", min: -180, max: 180 },
  { id: "zoom", label: "Zoom", value: 1, unit: "x", min: 1, max: 5 },
];

export const roverControlStatusRows = [
  { id: "battery", label: "Battery Level", icon: "battery", type: "bar", value: 78 },
  { id: "mode", label: "Rover Mode", icon: "cpu", type: "text", value: "Manual Control" },
  { id: "speed", label: "Speed", icon: "gauge", type: "text", value: "0.5 m/s" },
  { id: "connection", label: "Connection", icon: "wifi", type: "text", value: "LoRa Mesh (3 nodes)" },
  { id: "uptime", label: "Uptime", icon: "clock", type: "text", value: "01:24:17" },
  { id: "lights", label: "Lights", icon: "bulb", type: "toggle", value: true, onLabel: "ON", offLabel: "OFF" },
  { id: "rockTapper", label: "Rock Tapper", icon: "wrench", type: "toggle", value: false, onLabel: "ON", offLabel: "OFF" },
  { id: "loraDispenser", label: "LoRa Dispenser", icon: "lora", type: "toggle", value: true, onLabel: "Ready", offLabel: "Off" },
  { id: "siren", label: "Siren / Buzzer", icon: "speaker", type: "toggle", value: false, onLabel: "ON", offLabel: "OFF" },
];


// =========================================================
// Sensor Data page
// Per project convention: any figure that would come from a
// live sensor/telemetry reading is set to the literal "--"
// placeholder until real data is wired in. Static config
// (units, limits, ranges, comms spec) stays as real text.
// =========================================================

// Top summary strip — ONLY these four widgets are used on this page.
export const sensorTopStats = [
  { id: "online", icon: "radio", label: "Sensors Online", value: "--", suffix: "/ --" },
  { id: "uptime", icon: "clock", label: "System Uptime", value: "--" },
  { id: "live", icon: "database", label: "Real-Time Data", value: "Live" },
  { id: "temp", icon: "thermometer", label: "Rover Internal Temp", value: "--", unit: "°C" },
];

// Dropdown options for the sensor category filter (functional).
export const sensorCategories = [
  { id: "all", label: "All Sensors" },
  { id: "gas", label: "Gas & Air Quality" },
  { id: "environmental", label: "Environmental" },
  { id: "motion", label: "Motion & Vibration" },
  { id: "imaging", label: "Imaging" },
];

// The 12 sensor reading cards.
export const sensorDetailList = [
  { id: "ch4", code: "S-01", label: "Methane (CH₄)", unit: "%LEL", value: "--", status: "Normal", sub: "Limit: 5 %LEL", icon: "flame", category: "gas", connected: true },
  { id: "co", code: "S-02", label: "Carbon Monoxide (CO)", unit: "ppm", value: "--", status: "Normal", sub: "Limit: 50 ppm", icon: "cloud", category: "gas", connected: true },
  { id: "h2s", code: "S-03", label: "Hydrogen Sulfide (H₂S)", unit: "ppm", value: "--", status: "Normal", sub: "Limit: 10 ppm", icon: "skull", category: "gas", connected: true },
  { id: "o2", code: "S-04", label: "Oxygen (O₂)", unit: "%", value: "--", status: "Normal", sub: "Range: 19.5 – 23.5 %", icon: "o2", category: "gas", connected: true },
  { id: "temperature", code: "S-05", label: "Temperature", unit: "°C", value: "--", status: "Normal", sub: "Range: -10 – 50 °C", icon: "thermometer", category: "environmental", connected: true },
  { id: "humidity", code: "S-06", label: "Humidity", unit: "%", value: "--", status: "Normal", sub: "Range: 0 – 100 %", icon: "droplet", category: "environmental", connected: true },
  { id: "co2", code: "S-07", label: "Carbon Dioxide (CO₂)", unit: "ppm", value: "--", status: "Normal", sub: "Limit: 5000 ppm", icon: "cloud", category: "gas", connected: true },
  { id: "pressure", code: "S-08", label: "Pressure", unit: "kPa", value: "--", status: "Normal", sub: "Range: 80 – 120 kPa", icon: "gauge", category: "environmental", connected: true },
  { id: "vibration", code: "S-09", label: "Vibration / Geophone", unit: "g", value: "--", status: "Normal", sub: "Limit: 2.0 g", icon: "pulse", category: "motion", connected: true },
  { id: "sound", code: "S-10", label: "Sound / Acoustic", unit: "dB", value: "--", status: "Normal", sub: "Baseline: < 80 dB", icon: "mic", category: "motion", connected: true },
  { id: "thermal-cam", code: "S-11", label: "Thermal Camera", unit: "°C", value: "--", status: "Normal", sub: "Range: -20 – 150 °C", icon: "camera", category: "imaging", connected: true },
  { id: "imu", code: "S-12", label: "IMU (Motion)", unit: "Status", value: "Stable", status: "Normal", sub: "Pitch: --°, Roll: --°", icon: "cube", category: "motion", connected: true },
];

// Sensor Health Overview donut + legend (bottom-left panel).
export const sensorHealthOverview = {
  centerLabel: "-- / --",
  centerSub: "Online",
  legend: [
    { id: "online", label: "Online", value: "--", color: "#22c55e" },
    { id: "degraded", label: "Degraded", value: "--", color: "#eab308" },
    { id: "offline", label: "Offline", value: "--", color: "#ef4444" },
  ],
};

// Recent Sensor Events table (bottom-middle panel).
export const recentSensorEvents = [
  { time: "--:--:--", sensor: "CH₄", event: "Reading normal", status: "Normal" },
  { time: "--:--:--", sensor: "CO", event: "Reading normal", status: "Normal" },
  { time: "--:--:--", sensor: "H₂S", event: "Reading normal", status: "Normal" },
  { time: "--:--:--", sensor: "Temperature", event: "Reading normal", status: "Normal" },
  { time: "--:--:--", sensor: "Humidity", event: "Reading normal", status: "Normal" },
];

// Sensor System Info list (bottom-right panel).
export const sensorSystemInfo = [
  { id: "total", label: "Total Sensors", value: "--", icon: "grid" },
  { id: "connected", label: "Connected", value: "--", icon: "wifi" },
  { id: "disconnected", label: "Disconnected", value: "--", icon: "wifiOff" },
  { id: "updateRate", label: "Data Update Rate", value: "--", icon: "clock" },
  { id: "communication", label: "Communication", value: "LoRa Mesh (3 nodes)", icon: "wifi" },
  { id: "lastSync", label: "Last Sync", value: "--:--:--", icon: "clock" },
];
