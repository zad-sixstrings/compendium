// App.js
import React, { useState } from "react";
import MonsterCards from "./MonsterCard";
import SearchBar from "./SearchBar";
import NavigationMenu from "./NavigationMenu";
import "../styles/App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <NavigationMenu />
      <div className="main-content">
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
        <MonsterCards searchTerm={searchTerm} />
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
