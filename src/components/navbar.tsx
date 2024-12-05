import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './navbar.css';

interface NavbarProps {
  setSearchMovies: React.Dispatch<React.SetStateAction<any[] | null>>; 
  searchmovies: any[] | null; 
}

const Navbar: React.FC<NavbarProps> = ({ setSearchMovies, searchmovies }) => {
  const [searchTerm, setSearchTerm] = useState<string>(''); 

  // Handle the search form submission
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim() === '') return;

    try {
      const response = await axios.get(
        `https://yts.mx/api/v2/list_movies.json?query_term=${searchTerm}`
      );
      setSearchMovies(response.data.data.movies);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  console.log('Search Movies:', searchmovies);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i>Yts.Mx</i>
        </Link>
        <i className="navbar-details col-3">HD movies at the smallest file size</i>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="row w-100">
            <div className="col-5 text-center">
              <form className="d-flex justify-content-center" onSubmit={handleSearch} role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>
            </div>

            <div className="col-4 text-end">
              <ul className="navbar-nav mb-2">
                <button className="btn" type="button">Home</button>
                <button className="btn4k" type="button">4K</button>
                <button className="btn" type="button">Trending</button>
                <button className="btn col-6" type="button">Browse Movies</button>
                <button className="btn" type="button">Login</button>
                <button className="btn" type="button">Register</button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
