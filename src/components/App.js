// App.js
import React, { useState } from "react";
import MonsterCards from "./MonsterCard";
import SearchBar from "./SearchBar";
import NavigationMenu from "./NavigationMenu";
import "../styles/App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataSource, setDataSource] = useState("mhw");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDataSourceChange = (newSource) => {
    setDataSource(newSource);
  };

  return (
    <div className="App">
      <NavigationMenu onDataSourceChange={handleDataSourceChange} />
      <div className="main-content">
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
        <MonsterCards searchTerm={searchTerm} dataSource={dataSource} />
      </div>
      {/* ... */}
    </div>
  );
};

export default App;
