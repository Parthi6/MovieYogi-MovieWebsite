import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import backup from '../assets/backup.png';
import { convertMinutes } from '../utils/utils';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true); 
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await fetch(url);
        if (res.ok) {
          const jsonData = await res.json();
          setMovie(jsonData);
        } else {
          console.error('Failed to fetch movie data');
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [id, url]);

  useEffect(() => {
    if (movie) {
      document.title = `${movie.title}`;
    }
  }, [movie]);

  const image = movie?.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : backup;

  return (
    <main className="container">
      {loading ? (
        <p>Loading...</p>
      ) : movie ? (
        <>
          <h5 className="text-warning py-2 border-bottom mb-3">{movie.title}</h5>
          <div className="row">
            <div className="col-md-4">
              <img src={image} alt={movie.title} className="img-fluid img-thumbnail" />
            </div>
            <div className="col-md-8">
              <h3 className="text-white">{movie.title}</h3>
              <p className="mt-3 text-white">{movie.overview}</p>

              {movie.genres ? <p className='d-flex gap-3'>
                {movie.genres.map((genres) =>(
                  <span key={genres.id} className='badge bg-black'>{genres.name}</span>
                ))}

              </p>: ""}


              <p className='mt-2'>
                <i className='bi bi-star-fill text-warning'></i> {movie.vote_avarage} |
                <i className='bi bi-people-fill text-success'></i> {movie.vote_count} reviews
              </p>

              <table className="table table-bordered w-50 mt-2">
                
                <tbody>
                  <tr>
                    <th> Runtime</th>
                    <td>{convertMinutes(movie.runtime)}</td>
                  </tr>
                  <tr>
                    <th> Budget</th>
                    <td>{movie.budget}</td>
                  </tr>
                  <tr>
                    <th> Revenue</th>
                    <td>{movie.revenue}</td>
                  </tr>
                  <tr>
                    <th> Release Date</th>
                    <td>{movie.release_date}</td>
                  </tr>
                </tbody>
              </table>

            <a className="btn btn-warning" target='_blank' href={`https://www.imdb.com/title/${movie.imdb_id}`}> 
            {""}
            View in IMDB</a>


            </div>
          </div>
        </>
      ) : (
        <p>No movie details available</p>
      )}
    </main>
  );
};

export default MovieDetails;