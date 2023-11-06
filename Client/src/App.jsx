import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('raja');
  const [yearFilter, setYearFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const searchMovies = (query, yearFilter, page = 1) => {
    setIsLoading(true);
    setError(null);

    let apiUrl = `http://localhost:8000/api/search?query=${query}&page=${page}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setMovies(response.data.Search);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    searchMovies(query, yearFilter, currentPage);
  }, [query, yearFilter, currentPage]);

  return (
    <>
      <SearchBar
        onSearch={(q, year) => {
          setQuery(q);
          setYearFilter(year);
          setCurrentPage(1);
        }}
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <MovieList
            movies={movies}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}
    </>
  );
}

export default App;
