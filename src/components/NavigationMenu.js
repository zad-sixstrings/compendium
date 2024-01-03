// NavigationMenu.js
import React from "react";
import "../styles/NavigationMenu.css"; // Import the stylesheet for styling

const NavigationMenu = () => {
  return (
    <div className="navigation-menu">
      <div className="left-section">
        <a href="#">
          <img src="/logo192.png" alt="Compendium Logo" className="logo" />
        </a>
        <span className="app-name">Compendium</span>
      </div>
      <div className="right-section">
        <span className="menu-item">
          <img src="assets/logo_world.png" className="game-logo" />
        </span>
        <span className="menu-item">
          <img src="assets/logo_rise.png" className="game-logo" />
        </span>
      </div>
    </div>
  );
};

export default NavigationMenu;
