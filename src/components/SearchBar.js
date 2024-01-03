// SearchBar.js
import React from "react";

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search monster..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
