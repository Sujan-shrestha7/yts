import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { homeApi } from '../APIs/api';

const Home: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]); // Default movie list
  const [searchMovies, setSearchMovies] = useState<any[] | null>(null); // Searched movies
  const navigate = useNavigate();

  // Fetch default movies on load
  useEffect(() => {
    const fetchDate = async ()=>{
      try{
    const responsee = await axios.get(homeApi())
    setMovies(responsee.data.data.movies)
      }
      catch(e){
        alert(e)
      }
    }
    fetchDate();
  }, []);
  // Function to navigate to movie details
  const getMovie = (id: number) => {
    navigate(`/movie-details/${id}`);
  };

  return (
    <div className='bodyDiv'>


      <Navbar setSearchMovies={setSearchMovies} />
      <h1 className='descrp'>Welcome to yts.mx ! Enjoy !!</h1>
      {searchMovies&& searchMovies.length > 0? (
        <div className='idBox'>
          {searchMovies.map((movie) => (
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
        </div>
      ) 
      :
      (
        <div className='idBox'>
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
        </div>
      )}
    </div>
  );
};

export default Home;
