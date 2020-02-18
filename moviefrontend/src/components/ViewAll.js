import React from 'react';
import { useEffect, useState } from 'react';

const axios = require('axios');
const ViewAll = props => {
  const url = `http://localhost:8080/api/movies/?genre=${props.match.params.genre}`;
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios.get(url).then(res => setMovieList(res.data));
  }, []);
  return (
    <div>
      <ul>
        {movieList.map(movie => {
          return <li>{movie.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default ViewAll;
