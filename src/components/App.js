// App.js
import React, { useState } from "react";
import MonsterCards from "./MonsterCard";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import "../styles/App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectGame = (game) => {
    setSelectedGame(game);
    toggleSidebar();
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const games = [
    { id: 1, name: "Monster Hunter World", db: "mhw_db.json" },
    { id: 2, name: "Monster Hunter Rise", db: "mhr_db.json" },
  ];

  return (
    <div className="App">
      <SideBar
        games={games}
        onSelectGame={handleSelectGame}
        isOpen={isSidebarOpen}
        toggleSideBar={toggleSidebar}
      />
      <div className="content">
        <div className="burger-menu" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
        <MonsterCards searchTerm={searchTerm} selectedGame={selectedGame} />
        <div className="footer">
          <p className="centered">
            Compendium | Created by{" "}
            <a href="https://github.com/zad-sixstrings">zad-sixstrings</a> -
            2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
