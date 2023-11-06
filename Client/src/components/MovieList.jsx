import React from "react";
import "../styles/MovieList.css";

const MovieList = ({ movies, currentPage, onPageChange }) => {
  const displayMovies = movies || [];

  const maxResultsPerPage = 10;
  const totalPages = Math.ceil(displayMovies.length / maxResultsPerPage);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className="movie-list">
      {displayMovies.map((movie) => (
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
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        )}
        <span>Page {currentPage}</span>
        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};

export default MovieList;
