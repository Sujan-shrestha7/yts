import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';

const MovieDetails = () => {
  const { moviedetails } = useParams(); // Get movie ID from URL
  const [movieDetails, setMovieDetails] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (moviedetails) {
      // Fetch movie details using the correct API endpoint
      axios
        .get(`https://yts.mx/api/v2/movie_details.json?movie_id=${moviedetails}`)
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

  // Show loading state until data is fetched
  if (loading) {
    return <div>Loading movie details...</div>;
  }

  // If no movie details were found
  if (!movieDetails) {
    return <div>No movie details found.</div>;
  }

  return (
    <div>
      <Navbar />
      <h1>{movieDetails.title}</h1>
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
  );
};

export default MovieDetails;
