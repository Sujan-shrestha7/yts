import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get('https://yts.mx/api/v2/list_movies.json')
      .then((response) => {
        setMovies(response.data.data.movies);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  const getMovie = (id: number) => {
    navigate(`/movie-details/${id}`);
  };

  return (
    <div>
      <Navbar />
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id} onClick={() => getMovie(movie.id)}>
              <h3>{movie.title}</h3>
              <img
                src={movie.medium_cover_image}
                alt={movie.title}
                style={{ maxWidth: '200px', maxHeight: '300px' }}
              />
              <p>Year: {movie.year}</p>
              <p>Rating: {movie.rating}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading movies...</p>
      )}
    </div>
  );
};

export default Home;
