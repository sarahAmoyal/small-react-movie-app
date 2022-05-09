import React, { useState, useEffect } from "react";
import Movie from "./Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
        getMovies(SEARCH_API + searchTerm);
    }
    setSearchTerm("")
    
  };
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e);
  };
  return (
      <>
    <div className='search'>
    <form onSubmit={handleOnSubmit}>
      <input
        type='text'
        className='navInput'
        placeholder='Search a film...'
        value={searchTerm}
        onChange={handleOnChange}
      />
    </form>
  </div>
    <div className='moviesContainer'>
     
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
    </>
  );
}
