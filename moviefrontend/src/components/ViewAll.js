import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');
const ViewAll = (props) => {
	const url = `https://cinopsis.herokuapp.com/api/movies/?genre=${props.match.params.genre}`;
	const [movieList, setMovieList] = useState([]);
	useEffect(() => {
		axios.get(url).then((res) => setMovieList(res.data));
	}, [url]);
	return (
		<div>
			<ul>
				{movieList.map((movie) => {
					return (
						<Link to={`/movie/${movie._id}`}>
							<li>{movie.title}</li>
						</Link>
					);
				})}
			</ul>
		</div>
	);
};

export default ViewAll;
