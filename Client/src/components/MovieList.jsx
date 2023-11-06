import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/MovieList.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/search?s=kabhi`) // Make sure your API server is running and the endpoint is correct
      .then((response) => {
        setMovies(response.data.Search);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-card">
          {movie.Poster ? (
            <img src={movie.Poster} alt={movie.Title} />
          ) : (
            <p>No Poster Available</p>
          )}
          <div className="movie-details">
            <h2>{movie.Title || "Title not available"}</h2>
            <p>Year: {movie.Year || "Year not available"}</p>
            <p>Type: {movie.Type || "Type not available"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
