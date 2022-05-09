import React from "react";
const IMG_API = "https://image.tmdb.org/t/p/w1280";

export default function Movie({ title, overview, poster_path, release_date }) {
  return (
    <div className='movie'>
      <img src={IMG_API + poster_path} className='movieImg' alt={title} />
      <h3 className='movieTitle'>{title}</h3>
      <p>{release_date}</p>
      <div className='movie-over '>{overview}</div>
    </div>
  );
}
