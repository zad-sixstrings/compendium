// App.js
import React, { useState } from "react";
import MonsterCards from "./MonsterCard";
import SearchBar from "./SearchBar";
import "../styles/App.css";

// Search bar
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <MonsterCards searchTerm={searchTerm} />
    </div>
  );
};

export default App;
