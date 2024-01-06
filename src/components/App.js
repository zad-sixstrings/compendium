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
        <div className="warning">
          <p>
            There is a problem with the way weaknesses and resistances are
            displayed on <strong>Firefox</strong> and <strong>Safari</strong>. I
            am aware of this bug and am working on it. Sorry for the
            inconvenience. Will update asap !
          </p>
        </div>
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
        <MonsterCards searchTerm={searchTerm} dataSource={dataSource} />
      </div>
      {/* ... */}
    </div>
  );
};

export default App;
