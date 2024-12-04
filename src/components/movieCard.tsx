import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch movies from the YTS API on component mount
  useEffect(() => {
    axios
      .get('https://yts.mx/api/v2/movie_details.json')
      .then((response) => {
        setMovies(response.data.data.movies);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="movie-list-container">
      <h1>Movies</h1>
      {/* Show loading message while fetching movies */}
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <ul className="movie-list">
          {movies.map((movie) => (
            <li key={movie.id} className="movie-item">
              <h3>{movie.title}</h3>
              <img
                src={movie.medium_cover_image}
                alt={movie.title}
                className="movie-image"
              />
              <p>Year: {movie.year}</p>
              <p>Rating: {movie.rating}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
