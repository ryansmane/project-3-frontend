import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const axios = require('axios');
const url = 'https://cinopsis.herokuapp.com/api/movies';

const Home = (props) => {
	const [allMovies, setAllMovies] = useState([]);

	//getting and setting all movies
	useEffect(() => {
		axios.get(url).then((res) => setAllMovies(res.data));
	}, []);

	const getTopFive = (genre) => {
		const topFive = allMovies
			.filter((movie) => movie.genre === genre)
			.sort((a, b) => (a.avgRating > b.avgRating ? -1 : 1));
		topFive.splice(5, topFive.length - 1);
		const bullets = topFive.map((movie) => {
			return (
				<Link to={'movie/' + movie._id}>
					<li>
						{movie.title}{' '}
						{movie.ratings.length > 0 && (
							<span style={{ color: 'black' }}>
								Average Rating:{movie.avgRating}
							</span>
						)}
					</li>
				</Link>
			);
		});
		if (bullets.length >= 5) {
			const ViewAll = addViewAll(genre);
			bullets.push(ViewAll);
		}
		return bullets;
	};
	const addViewAll = (genre) => {
		return <Link to={`genre/${genre}`}>View All</Link>;
	};

	return (
		<div>
			<h1>Home</h1>
			<main className="homeMain">
				<div className="homeList">
					<h2>Submissions</h2>
					<h3>Comedy</h3>
					<ul>
						{allMovies &&
							(getTopFive('Comedy').length ? (
								getTopFive('Comedy')
							) : (
								<li>No Comedies At This Time</li>
							))}
					</ul>
					<h3>Romance</h3>
					<ul>
						{allMovies &&
							(getTopFive('Romance').length ? (
								getTopFive('Romance')
							) : (
								<li>No Romance At This Time</li>
							))}
					</ul>
					<h3>Action</h3>
					<ul>
						{allMovies &&
							(getTopFive('Action').length ? (
								getTopFive('Action')
							) : (
								<li>No Actions At This Time</li>
							))}
					</ul>
					<h3>Horror</h3>
					<ul>
						{allMovies &&
							(getTopFive('Horror').length ? (
								getTopFive('Horror')
							) : (
								<li>No Horrors At This Time</li>
							))}
					</ul>
					<h3>Drama</h3>
					<ul>
						{allMovies &&
							(getTopFive('Drama').length ? (
								getTopFive('Drama')
							) : (
								<li>No Dramas At This Time</li>
							))}
					</ul>
				</div>
				<div>
					<h2>Aside</h2>
				</div>
			</main>
		</div>
	);
};

export default Home;
