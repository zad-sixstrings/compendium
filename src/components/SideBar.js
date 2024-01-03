// SideBar.js
import React from "react";
import "../styles/SideBar.css";

const SideBar = ({ games, onSelectGame, isOpen, toggleSideBar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Sidebar content */}
      {games.map((game) => (
        <p key={game.id} onClick={() => onSelectGame(game)}>
          {game.name}
        </p>
      ))}
      <div className="burger-menu" onClick={toggleSideBar}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
    </div>
  );
};

export default SideBar;
