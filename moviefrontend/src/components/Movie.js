import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { withRouter } from 'react-router-dom';
const axios = require('axios');

const Movie = (props) => {
	const url = `http://localhost:8080/api/movies/${props.match.params.id}`;

	const [movie, setMovie] = useState({});
	const [rating, setRating] = useState(0);

	useEffect(() => {
		axios.get(url).then((res) => setMovie(res.data));
	}, []);

	const postRating = () => {
		const ratingInfo = { rating };
		axios.post(url + '/rating', ratingInfo);
	};

	return (
		<div>
			<h2>
				Title : <em>{movie.title}</em>
			</h2>
			<h3>
				Average Rating:{' '}
				{movie.ratings && (movie.avgRating || 'No ratings yet!')}
			</h3>
			<h4>Synopsis</h4>
			<p>{movie.synopsis}</p>
			<Form>
				<Form.Group controlId="exampleForm.ControlSelect1">
					<Form.Label>Rate Movie</Form.Label>
					<Form.Control
						onChange={(evt) => setRating(evt.target.value)}
						className="genre-submit"
						as="select"
					>
						<option>0</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7</option>
						<option>8</option>
						<option>9</option>
						<option>10</option>
					</Form.Control>
				</Form.Group>
				<Button
					onClick={(evt) => {
						postRating();
					}}
					variant="danger"
					type="submit"
				>
					Submit Rating
				</Button>
			</Form>
		</div>
	);
};

export default withRouter(Movie);
