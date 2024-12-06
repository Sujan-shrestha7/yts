import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import { movie_details } from '../APIs/api';
import './details.css';

const MovieDetails = () => {
  const { moviedetails } = useParams(); 
  const [movieDetails, setMovieDetails] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (moviedetails) {
      axios
        .get(movie_details()+ `${moviedetails}`)
        .then((response) => {
          console.log("response data", response.data);
          setMovieDetails(response.data.data.movie); // Set movie details
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching movie details:', error);
          setLoading(false);
        });
    }
  }, [moviedetails]);
  if (loading) {
    return <div>Loading movie details...</div>;
  }

  if (!movieDetails) {
    return <div>No movie details found.</div>;
  }
  return (
    <div >
      <Navbar/>
      <div className='movieDetail'>
      <h1 className='Movie-title'>{movieDetails.title}</h1>
      <img
        src={movieDetails.medium_cover_image}
        alt={movieDetails.title}
        style={{ maxWidth: '300px', maxHeight: '400px' }}
      />
      <p><strong>Year:</strong> {movieDetails.year}</p>
      <p><strong>Rating:</strong> {movieDetails.rating}</p>
      <p><strong>Description:</strong> {movieDetails.description_full}</p>
      <p><strong>Genres:</strong> {movieDetails.genres.join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
