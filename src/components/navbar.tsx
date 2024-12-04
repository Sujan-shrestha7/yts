import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" ><i>Yts.Mx </i></Link>
        <i className="navbar-details col-4 ">HD movies at the smallest file size</i>
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
            <div className="col-4 text-center">
              <form className="d-flex justify-content-center" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              </form>
            </div>

            <div className="col-5 text-end">
              <ul className="navbar-nav mb-2">
                    <button className="btn" type="submit">Home</button>
                    <button className="btn4k" type="submit">4K</button>
                    <button className="btn" type="submit">Trending</button>
                    <button className="btn col-6" type="submit">Browse Movies</button>
                    <button className="btn" type="submit">Login</button>
                    <button className="btn" type="submit">Register</button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
