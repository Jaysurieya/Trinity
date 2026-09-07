// Lightweight inline SVG icon set — no external icon library required.
// Every icon takes `size` and `color` props so callers can theme them inline.
import { Settings,Flame,Cloud,Skull,Droplets,Car} from 'lucide-react';

export const Icon = ({ children, size = 20, viewBox = "0 0 24 24" }) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

export const LogoMark = ({ size = 40 }) => (
  <Icon size={size} viewBox="0 0 48 48">
    <path d="M24 4 L44 40 H4 Z" fill="#2563eb" />
    <path d="M24 16 L34 36 H14 Z" fill="#0b1220" />
    <path d="M24 24 L29 34 H19 Z" fill="#3b82f6" />
  </Icon>
);

export const HomeIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <path d="M3 11.5 12 4l9 7.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.5 10v9a1 1 0 0 0 1 1H17.5a1 1 0 0 0 1-1v-9" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.5 20v-6h5v6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);

export const VideoIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <rect x="3" y="6" width="12" height="12" rx="2" stroke={color} strokeWidth="1.8" />
    <path d="M15 10.5 21 7v10l-6-3.5Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
  </Icon>
);

export const SlidersIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <circle cx="12" cy="12" r="8.5" stroke={color} strokeWidth="1.8" />
    <path d="M12 7.5v2M12 14.5v2M7.5 12h2M14.5 12h2" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="12" r="2" fill={color} />
  </Icon>
);

export const MapIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <path
      d="M9 4 15 6l5-2v14l-5 2-6-2-5 2V6l5-2Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M9 4v14M15 6v14" stroke={color} strokeWidth="1.8" />
  </Icon>
);

export const PinIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <path
      d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9.5" r="2.3" stroke={color} strokeWidth="1.8" />
  </Icon>
);

// export const TruckIcon = ({ size, color = "currentColor" }) => (
//   <Icon size={size}>
//     <rect x="2.5" y="8" width="11" height="8" rx="1.2" stroke={color} strokeWidth="1.8" />
//     <path d="M13.5 11h3.5l3 3v2h-6.5v-5Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
//     <circle cx="7" cy="17.5" r="1.6" stroke={color} strokeWidth="1.6" />
//     <circle cx="16.5" cy="17.5" r="1.6" stroke={color} strokeWidth="1.6" />
//   </Icon>
// );

export const TruckIcon = ({ size = 20, color = 'currentColor', ...props }) => (
  <Car size={size} color={color} {...props} />
);


export const AlertIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <path
      d="M12 3.5 21.5 20h-19L12 3.5Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M12 10v4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="16.8" r="0.9" fill={color} />
  </Icon>
);

// export const SettingsIcon = ({ size, color = "currentColor" }) => (
//   <Icon size={size}>
//     <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.8" />
//     <path
//       d="M19.4 13.5a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V19.6a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.1-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1H4.4a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.55-1.1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H10.5a1.7 1.7 0 0 0 1-1.55V4.4a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V10.5a1.7 1.7 0 0 0 1.55 1H19.6a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1Z"
//       stroke={color}
//       strokeWidth="1.4"
//       strokeLinejoin="round"
//     />
//   </Icon>
// );

export const SettingsIcon = ({ size = 20, color = 'currentColor', ...props }) => (
  <Settings size={size} color={color} {...props} />
);

// export const FlameIcon = ({ size, color = "#f97316" }) => (
//   <Icon size={size}>
//     <path
//       d="M12 2.5c1 3 4 4.2 4 8a4 4 0 0 1-8 0c0-1 .3-1.8.8-2.6.4.9 1.2 1.4 1.2 1.4-.4-2.4 1-3.4 2-6.8Z"
//       fill={color}
//     />
//   </Icon>
// );

export const FlameIcon = ({ size = 20, color = 'orange', ...props }) => (
  <Flame size={size} color={color} {...props} />
);

// export const CloudIcon = ({ size, color = "#60a5fa" }) => (
//   <Icon size={size}>
//     <path
//       d="M7 18a4 4 0 0 1-.5-7.97A5 5 0 0 1 16.2 8.6 4.5 4.5 0 0 1 16.5 18H7Z"
//       fill={color}
//     />
//   </Icon>
// );

export const CloudIcon = ({ size = 20, color = 'Blue', ...props }) => (
  <Cloud size={size} color={color} {...props} />
);


// export const SkullIcon = ({ size, color = "#22c55e" }) => (
//   <Icon size={size}>
//     <path
//       d="M12 3a7 7 0 0 0-7 7c0 2.4 1.2 4 2.5 5.2V17a1.5 1.5 0 0 0 1.5 1.5h.5V20a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1.5h.5A1.5 1.5 0 0 0 16.5 17v-1.8C17.8 14 19 12.4 19 10a7 7 0 0 0-7-7Z"
//       fill={color}
//     />
//     <circle cx="9.5" cy="10.5" r="1.4" fill="#0b1220" />
//     <circle cx="14.5" cy="10.5" r="1.4" fill="#0b1220" />
//   </Icon>
// );

export const SkullIcon = ({ size = 20, color = '#50F527', ...props }) => (
  <Skull size={size} color={color} {...props} />
);


export const ThermometerIcon = ({ size, color = "#ef4444" }) => (
  <Icon size={size}>
    <path
      d="M12 3.5a2 2 0 0 0-2 2v8.6a3.5 3.5 0 1 0 4 0V5.5a2 2 0 0 0-2-2Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="17" r="1.6" fill={color} />
  </Icon>
);

// export const DropletIcon = ({ size, color = "#3b82f6" }) => (
//   <Icon size={size}>
//     <path
//       d="M12 3.5S6 11 6 15a6 6 0 0 0 12 0c0-4-6-11.5-6-11.5Z"
//       fill={color}
//     />
//   </Icon>
// );

export const DropletIcon = ({ size = 20, color = '#27E0F5', ...props }) => (
  <Droplets size={size} color={color} {...props} />
);

export const BatteryIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <rect x="2.5" y="8" width="16" height="8" rx="1.5" stroke={color} strokeWidth="1.6" />
    <path d="M20.5 10.5v3" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
  </Icon>
);

export const CpuIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <rect x="7" y="7" width="10" height="10" rx="1.5" stroke={color} strokeWidth="1.6" />
    <rect x="10" y="10" width="4" height="4" stroke={color} strokeWidth="1.6" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M19.5 4.5l-2 2M6.5 17.5l-2 2" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
  </Icon>
);

export const GaugeIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <path d="M4 15.5a8 8 0 1 1 16 0" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 15.5 15.5 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="15.5" r="1.2" fill={color} />
  </Icon>
);

export const WifiIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <path d="M4 9a12 12 0 0 1 16 0" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M7 12.5a7.5 7.5 0 0 1 10 0" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M10 16a3.5 3.5 0 0 1 4 0" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="19" r="1" fill={color} />
  </Icon>
);

export const ClockIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <circle cx="12" cy="12" r="8.5" stroke={color} strokeWidth="1.8" />
    <path d="M12 7.5V12l3 2" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);

export const DangerIcon = ({ size, color = "#ef4444" }) => (
  <Icon size={size}>
    <path d="M12 3.5 21.5 20h-19L12 3.5Z" fill="rgba(239,68,68,0.15)" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M12 10v4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="16.8" r="0.9" fill={color} />
  </Icon>
);

export const WarningIcon = ({ size, color = "#eab308" }) => (
  <Icon size={size}>
    <path d="M12 3.5 21.5 20h-19L12 3.5Z" fill="rgba(234,179,8,0.15)" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M12 10v4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="16.8" r="0.9" fill={color} />
  </Icon>
);

export const InfoIcon = ({ size, color = "#3b82f6" }) => (
  <Icon size={size}>
    <circle cx="12" cy="12" r="8.5" fill="rgba(59,130,246,0.15)" stroke={color} strokeWidth="1.8" />
    <path d="M12 11v5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="8.3" r="0.9" fill={color} />
  </Icon>
);

export const SuccessIcon = ({ size, color = "#22c55e" }) => (
  <Icon size={size}>
    <circle cx="12" cy="12" r="8.5" fill="rgba(34,197,94,0.15)" stroke={color} strokeWidth="1.8" />
    <path d="M8.5 12.3 11 14.8l4.5-5.6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);

export const BarChartIcon = ({ size, color = "#3b82f6" }) => (
  <Icon size={size}>
    <rect x="4" y="13" width="3.2" height="7" rx="0.5" fill={color} />
    <rect x="10.4" y="8" width="3.2" height="12" rx="0.5" fill={color} />
    <rect x="16.8" y="4" width="3.2" height="16" rx="0.5" fill={color} />
  </Icon>
);

export const PersonIcon = ({ size, color = "#ef4444" }) => (
  <Icon size={size}>
    <circle cx="12" cy="8" r="3.2" fill={color} />
    <path d="M5.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" fill={color} />
  </Icon>
);

export const TargetIcon = ({ size, color = "#3b82f6" }) => (
  <Icon size={size}>
    <circle cx="12" cy="12" r="8.5" stroke={color} strokeWidth="1.6" />
    <circle cx="12" cy="12" r="5" stroke={color} strokeWidth="1.6" />
    <circle cx="12" cy="12" r="1.6" fill={color} />
  </Icon>
);

export const O2Badge = ({ size = 22 }) => (
  <Icon size={size} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="#2563eb" />
    <text x="12" y="15.5" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#fff">
      O₂
    </text>
  </Icon>
);

export const RoverMarkerIcon = ({ size = 16, color = "#22c55e" }) => (
  <Icon size={size}>
    <path d="M12 3.5 21.5 20h-19L12 3.5Z" fill={color} stroke={color} strokeLinejoin="round" />
    <path d="M12 9.5v4" stroke="#0b1220" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="12" cy="16" r="0.8" fill="#0b1220" />
  </Icon>
);

export const HazardMarkerIcon = ({ size = 16, color = "#ef4444" }) => (
  <Icon size={size}>
    <path d="M12 3.5 21.5 20h-19L12 3.5Z" fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M12 10v4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="16.8" r="0.9" fill={color} />
  </Icon>
);

export const DockMarkerIcon = ({ size = 16, color = "#60a5fa" }) => (
  <Icon size={size}>
    <path d="M3 11.5 12 4l9 7.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.5 10v9a1 1 0 0 0 1 1H17.5a1 1 0 0 0 1-1v-9" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);

export const RelayMarkerIcon = ({ size = 14, color = "#3b82f6" }) => (
  <Icon size={size}>
    <circle cx="12" cy="12" r="8" fill={color} />
  </Icon>
);

export const ExpandIcon = ({ size = 18, color = "currentColor" }) => (
  <Icon size={size}>
    <path
      d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export const PlayIcon = ({ size = 16, color = "#fff" }) => (
  <Icon size={size}>
    <path d="M6 4.5v15l13-7.5-13-7.5Z" fill={color} />
  </Icon>
);


// =========================================================
// Rover Control page icons
// =========================================================


export const CameraIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <rect x="3" y="7" width="18" height="12" rx="2" stroke={color} strokeWidth="1.8" />
    <circle cx="12" cy="13" r="3.2" stroke={color} strokeWidth="1.8" />
    <path d="M8.5 7 10 4.5h4L15.5 7" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
  </Icon>
);

export const ThermalIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="2" stroke={color} strokeWidth="1.6" strokeDasharray="3 2" />
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.6" />
  </Icon>
);

export const BulbIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <circle cx="12" cy="10" r="5.5" stroke={color} strokeWidth="1.8" />
    <path d="M10 18h4M10.5 20h3" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </Icon>
);

export const WrenchIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <path
      d="M14.5 6.5a4 4 0 0 0-5.5 4.6L4 16.2l2.3 2.3 5.1-5a4 4 0 0 0 4.6-5.5l-2.3 2.3-2-2 2.3-2.3Z"
      stroke={color}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </Icon>
);

export const LoraDispenserIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <circle cx="12" cy="14" r="1.6" fill={color} />
    <path d="M8.5 11a5 5 0 0 1 7 0M6 8.5a8.5 8.5 0 0 1 12 0" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
  </Icon>
);

export const SpeakerIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <path d="M4 10v4h3l5 4V6l-5 4H4Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M16 9.5a4 4 0 0 1 0 5M18.5 7a7.5 7.5 0 0 1 0 10" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
  </Icon>
);

export const PulseIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <path
      d="M3 12h4l2-6 4 12 2-8 2 2h4"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export const ArrowUpIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <path d="M12 5v14M12 5l-5 5M12 5l5 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);

export const ArrowDownIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <path d="M12 19V5M12 19l-5-5M12 19l5-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);

export const ArrowLeftIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <path d="M19 12H5M19 12l-5-5M19 12l-5 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);

export const ArrowRightIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <path d="M5 12h14M5 12l5-5M5 12l5 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);

export const StopSquareIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <rect x="6" y="6" width="12" height="12" rx="1.5" fill={color} />
  </Icon>
);

export const RefreshIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <path
      d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path d="M18 4v4h-4M6 20v-4h4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);


/* =========================================================
   Sensor Data page — icon stubs
   Placeholder shapes only — swap each for your own icon
   component. The comment above each one describes what it
   should visually depict.
   ========================================================= */

// A magnifying glass. Used in: the sensor search input.
export const SearchIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <circle cx="10.5" cy="10.5" r="6" stroke={color} strokeWidth="1.8" />
    <path d="M15 15l5 5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </Icon>
);

// A small downward chevron. Used in: the "All Sensors" filter dropdown.
export const ChevronDownIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <path d="M6 9l6 6 6-6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);

// Concentric broadcast/antenna waves. Used in: "Sensors Online" top-stat card.
export const RadioIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <circle cx="12" cy="12" r="2" fill={color} />
    <path d="M8.5 15.5a5 5 0 0 1 0-7M15.5 8.5a5 5 0 0 1 0 7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M5.5 18.5a9 9 0 0 1 0-13M18.5 5.5a9 9 0 0 1 0 13" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </Icon>
);

// A database/stacked-disc icon. Used in: "Live Real-Time Data" top-stat card.
export const DatabaseIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <ellipse cx="12" cy="6" rx="7" ry="2.5" stroke={color} strokeWidth="1.8" />
    <path d="M5 6v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" stroke={color} strokeWidth="1.8" />
    <path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" stroke={color} strokeWidth="1.8" />
  </Icon>
);

// A microphone body. Used in: Sound / Acoustic sensor card.
export const MicIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <rect x="9" y="3" width="6" height="11" rx="3" stroke={color} strokeWidth="1.8" />
    <path d="M6 11a6 6 0 0 0 12 0" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 17v3.5M9 20.5h6" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </Icon>
);

// A 3D cube/wireframe box. Used in: IMU (Motion) sensor card.
export const CubeIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <path
      d="M12 3.5 20 8v8l-8 4.5L4 16V8l8-4.5Z"
      stroke={color}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M4 8l8 4.5L20 8M12 12.5V21" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
  </Icon>
);

// A 2x2 grid of squares. Used in: "Total Sensors" row, Sensor System Info panel.
export const GridIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.2" stroke={color} strokeWidth="1.6" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1.2" stroke={color} strokeWidth="1.6" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1.2" stroke={color} strokeWidth="1.6" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1.2" stroke={color} strokeWidth="1.6" />
  </Icon>
);

// A wifi glyph with a strike-through slash. Used in: "Disconnected" row, Sensor System Info panel.
export const WifiOffIcon = ({ size, color = "currentColor" }) => (
  <Icon size={size}>
    <path d="M4 9a12 12 0 0 1 16 0" stroke={color} strokeWidth="1.6" strokeLinecap="round" opacity="0.4" />
    <path d="M7 12.5a7.5 7.5 0 0 1 10 0" stroke={color} strokeWidth="1.6" strokeLinecap="round" opacity="0.4" />
    <circle cx="12" cy="19" r="1" fill={color} />
    <path d="M3 3l18 18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </Icon>
);
