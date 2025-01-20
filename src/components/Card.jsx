import React from 'react';
import backup from '../assets/backup.png';
import { Link } from 'react-router-dom';

export const Card = ({ movie }) => {
  const { backdrop_path, poster_path, id, title, overview, vote_average, vote_count } = movie;
  
  // Use poster_path for movie image, fallback to backup if not available
  const image = poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : backup;

  return (
    <div className="col">
      <div className="card shadow-sm bg-dark" title={title}>
        <img src={image} alt={title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title text-warning text-overflow-1">{title}</h5>
          <p className="card-text text-overflow-2 text-white">{overview}</p>
          <div className="d-flex justify-content-between align-items-center">
            <Link to={`/movie/${id}`} className="btn btn-outline-warning stretched-link">
              Read More
            </Link>
            <small className="text-white">
              <i className="bi bi-star-fill text-warning"></i> 
               {vote_average} | <span className="text-white"> {vote_count}</span> review{vote_count > 1 ? 's' : ''}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};