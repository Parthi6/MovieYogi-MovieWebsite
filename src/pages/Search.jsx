import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card } from '../components/Card';
import useFetch from "../hooks/useFetch"; 


const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  useEffect(() => {
    document.title = `Search result for ${queryTerm}`;
  }, [queryTerm]);

  return (
    <main className="container">
      <h5 className='text-danger py-2 border-bottom'>{movies.length == 0? `No results found for ${queryTerm}` : `Search result for ${queryTerm}`}</h5>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 py-2">
        {movies?.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};

export default Search;