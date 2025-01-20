import React, { useEffect } from 'react';
import { Card } from '../components/Card';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch'; // Ensure correct import path

export const MovieList = ({ title, apiPath }) => {
  const { data: movies } = useFetch(apiPath); // Correct usage of useFetch

  useEffect(() => {
    document.title = title;
  }, [title]);

  const navigator = useNavigate();

  return (
    <div>
      <main className="container">
        {title === "All Movies" && (
          <div className="p-5 border mb-5 bg-muted">
            <h3 className="text-warning">Welcome to MovieYogi</h3>
            <p className="lead">
              Discover the best movies and TV shows, all in one place, across your favorite streaming platforms!
            </p>
            <button className="btn btn-warning" onClick={() => navigator("movies/upcoming")}>
              Explore
            </button>
          </div>
        )}
        <h4 className="text-white py-2 border-bottom">{title}</h4>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 py-2">
          {movies?.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
};