// SearchBar.js
import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [yearFilter, setYearFilter] = useState(""); // Updated year filter

  const handleSearch = () => {
    onSearch(query, yearFilter);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search for movies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        className="year-filter"
        value={yearFilter}
        onChange={(e) => setYearFilter(e.target.value)}
      >
        <option value="">All Years</option>
        <option value="1900-1919">1900-1919</option>
        <option value="1920-1939">1920-1939</option>
        <option value="1940-1959">1940-1959</option>
        <option value="1960-1979">1960-1979</option>
        <option value="1980-1999">1980-1999</option>
        <option value="2000-2019">2000-2019</option>
        <option value="2020-2039">2020-2039</option>
      </select>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
