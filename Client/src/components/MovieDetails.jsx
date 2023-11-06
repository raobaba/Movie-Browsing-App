import React from 'react';
import '../styles/MovieDetails.css';

const MovieDetails = ({ isOpen, onClose, movie }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>{movie.Title}</h2>
        <p>Year: {movie.Year}</p>
        <p>imdbID: {movie.imdbID}</p>
        <p>Type: {movie.Type}</p>
        {movie.Poster && <img src={movie.Poster} alt={movie.Title} />}
      </div>
    </div>
  );
};

export default MovieDetails;
