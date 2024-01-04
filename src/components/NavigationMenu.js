// NavigationMenu.js
import React from "react";
import "../styles/NavigationMenu.css";

const NavigationMenu = ({ onDataSourceChange }) => {
  const handleDataSourceChange = (newSource) => {
    onDataSourceChange(newSource);
  };

  return (
    <div className="navigation-menu">
      <div className="left-section">
        <a href="https://compendium.pickbyte.net">
          <img src="/logo192.png" alt="Compendium Logo" className="logo" />
        </a>
        <span className="app-name">Compendium</span>
      </div>
      <div className="right-section">
        <span
          className="menu-item"
          onClick={() => handleDataSourceChange("mhw")}
        >
          <img
            src="assets/logo_world.png"
            className="game-logo"
            alt="MH World logo"
          />
        </span>
        <span
          className="menu-item"
          onClick={() => handleDataSourceChange("mhr")}
        >
          <img
            src="assets/logo_rise.png"
            className="game-logo"
            alt="MH Rise logo"
          />
        </span>
      </div>
    </div>
  );
};

export default NavigationMenu;
