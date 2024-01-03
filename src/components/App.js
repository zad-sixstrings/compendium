// App.js
import React, { useState } from "react";
import MonsterCards from "./MonsterCard";
import SearchBar from "./SearchBar";
import NavigationMenu from "./NavigationMenu";

import "../styles/App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectGame = (game) => {
    setSelectedGame(game);
  };

  return (
    <div className="App">
      <NavigationMenu />
      <div className="main-content">
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
        <MonsterCards searchTerm={searchTerm} selectedGame={selectedGame} />
      </div>
      <div className="footer">
        <p className="centered">
          Compendium | Created by{" "}
          <a href="https://github.com/zad-sixstrings">zad-sixstrings</a> - 2023
        </p>
      </div>
    </div>
  );
};

export default App;
