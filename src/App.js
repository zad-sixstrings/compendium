// App.js
import React, { useState } from "react";
import MonsterCards from "./MonsterCard";
import "./App.css";

// Search bar
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search monster..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <MonsterCards searchTerm={searchTerm} />
    </div>
  );
};

export default App;
