import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { homeApi } from '../APIs/api';
// import Loading from './loading.gif'
// import loading from './loading/loading';
import Loading from './loading/loading';


const Home: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]); // Default movie list
  const [searchMovies, setSearchMovies] = useState<any[] | null>(null); // Searched movies
  // const [loading, setLoading] = useState<boolean>(true); // Loading state
  // const [IsVisible, NotVisible] = useState();
  const[show,setShow]=useState(true)
  const navigate = useNavigate();

  // Fetch default movies on load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(homeApi());
        setMovies(response.data.data.movies);
        setShow(false);
      } catch (e) {
        alert('Error fetching movies');
      }
    };
    fetchData();
  }, []);

  const getMovie = (id: number) => {
    navigate(`/movie-details/${id}`);
  };

  // if (loading) {
  //   // const timer = setTimeout(() => {
  //   //   setIsVisible(false);
  //   // }, 3000);
  //   // return ( ) => {
  //   //   clearTimeout(timer);
  //   // }
  //   return (
  //     <div className="loading">
  //       <p>Loading movies...</p>
  //       <img src={Loading} alt="" />
  //     </div>
  //   );
  // }

  return (
    <div className="bodyDiv">
      <Loading  show={show}/>
      <Navbar setSearchMovies={setSearchMovies} />
      <h1 className="descrp">Welcome to yts.mx! Enjoy!!</h1>
      {searchMovies && searchMovies.length > 0 ? (
        <div className="idBox">
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
      ) : movies.length > 0 ? (
        <div className="idBox">
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
      ) : (
        <div className="no-movies">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default Home;
