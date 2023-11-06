import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("");

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
        <option value="1900-1920">1900-1920</option>
        <option value="1920-1940">1920-1940</option>
        <option value="1940-1960">1940-1960</option>
        <option value="1960-1980">1960-1980</option>
        <option value="1980-2000">1980-2000</option>
        <option value="2000-2020">2000-2020</option>
        <option value="2020-2040">2020-2040</option>
      </select>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
