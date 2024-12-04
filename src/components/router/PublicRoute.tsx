import { BrowserRouter,Routes,Route} from "react-router-dom";
import MovieDetails from "../../pages/MovieDetails";
import React from 'react'
import Home from "../../pages/home";
const PublicRoute= () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/"element={<Home/>}></Route>
                <Route path="/movie-details/:moviedetails"element={<MovieDetails/>}></Route>
               
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default PublicRoute
