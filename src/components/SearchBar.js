// SearchBar.js
import React from "react";

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search monster..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
