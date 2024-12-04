import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/navbar';
import PublicRoute from './components/router/PublicRoute';

const MovieList: React.FC = () => {
  return (
    <div>
      <PublicRoute/>
    </div>
  );
};

export default MovieList;
