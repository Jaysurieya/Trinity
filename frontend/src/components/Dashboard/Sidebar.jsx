import React from "react";
import { navItems } from "../../data";
import {
  LogoMark,
  HomeIcon,
  VideoIcon,
  SlidersIcon,
  MapIcon,
  PinIcon,
  TruckIcon,
  AlertIcon,
  SettingsIcon,
} from "../Icons";

const ICON_MAP = {
  home: HomeIcon,
  video: VideoIcon,
  sliders: SlidersIcon,
  map: MapIcon,
  pin: PinIcon,
  truck: TruckIcon,
  alert: AlertIcon,
  settings: SettingsIcon,
};

export default function Sidebar({ activeItem = "dashboard", onSelect }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <LogoMark size={38} />
        <div className="sidebar-brand-text">
          <span className="sidebar-brand-name">TRINITY</span>
          <span className="sidebar-brand-tagline">SEE. SENSE. SAVE.</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const ItemIcon = ICON_MAP[item.icon];
          const isActive = item.id === activeItem;
          return (
            <button
              key={item.id}
              type="button"
              className={`sidebar-nav-item${isActive ? " active" : ""}`}
              onClick={() => onSelect && onSelect(item.id)}
            >
              <ItemIcon size={19} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        {/* Replace with the real rover product photo */}
        <div className="sidebar-rover-image" role="img" aria-label="Trinetra Rover">
          <img src="/assets/rover.png" alt="Trinetra Rover" />
        </div>

        <h3 className="sidebar-rover-name">Trinetra Rover</h3>
        <p className="sidebar-rover-team">Team Trinity</p>
        <p className="sidebar-rover-ps">SIH 2026 | PS ID: 26039</p>

        <p className="sidebar-quote">
          “Safer Mines
          <br />
          Stronger Tomorrows”
        </p>
      </div>
    </aside>
  );
}
