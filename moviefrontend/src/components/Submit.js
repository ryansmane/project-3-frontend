import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
const axios = require('axios');

const Create = (props) => {
	const [title, setTitle] = useState('');
	const [plot, setPlot] = useState('');
	const [genre, setGenre] = useState('Horror');

	const postMovie = () => {
		const newMovie = {
			title,
			synopsis: plot,
			genre,
			createdBy: localStorage.id
		};

		axios
			.post('https://cinopsis.herokuapp.com/api/movies', newMovie)
			.then((res) => {
				props.history.push('/');
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<Form>
				<Form.Group
					onChange={(evt) => setTitle(evt.target.value)}
					className="title-submit"
					controlId="formBasicText"
				>
					<Form.Label>Title</Form.Label>
					<Form.Text className="text-muted"></Form.Text>
					<Form.Control type="text" placeholder="Title" />
				</Form.Group>

				<Form.Group
					onChange={(evt) => setPlot(evt.target.value)}
					className="synopsis-submit"
					controlId="exampleForm.ControlTextarea1"
				>
					<Form.Label>Synopsis</Form.Label>
					<Form.Text className="text-muted"></Form.Text>
					<Form.Control placeholder="Plot" as="textarea" rows="15" />
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlSelect1">
					<Form.Label>Genre</Form.Label>
					<Form.Control
						onChange={(evt) => setGenre(evt.target.value)}
						className="genre-submit"
						as="select"
					>
						<option>Horror</option>
						<option>Comedy</option>
						<option>Action</option>
						<option>Drama</option>
						<option>Romance</option>
					</Form.Control>
				</Form.Group>

				<Button
					onClick={(evt) => {
						evt.preventDefault();
						postMovie();
					}}
					className="submission-button"
					variant="primary"
					type="submit"
				>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Create;
