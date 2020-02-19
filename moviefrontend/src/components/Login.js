import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
const axios = require('axios');

const Login = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const getInfoAndValidate = () => {
		const info = { email, password };

		axios
			.post('https://cinopsis.herokuapp.com/api/user/login', info)
			.then((res) => {
				if (res.data.error) {
					setError(res.data.error);
				} else {
					localStorage.setItem('id', res.data._id);
					localStorage.setItem('username', res.data.userName);
					props.history.push('/');
					window.location.reload();
				}
			})
			.catch((err) => console.log(err));

		//needs validation
	};

	return (
		<div>
			<Form className="login-form">
				<Form.Group
					onChange={(evt) => setEmail(evt.target.value)}
					controlId="formBasicEmail"
				>
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted"></Form.Text>
				</Form.Group>

				<Form.Group
					onChange={(evt) => setPassword(evt.target.value)}
					controlId="formBasicPassword"
				>
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Container>
					<Button
						onClick={(evt) => {
							evt.preventDefault();
							getInfoAndValidate();
						}}
						variant="primary"
						type="submit"
					>
						Submit
					</Button>
					<Button variant="dark" href="/signup">
						Sign Up
					</Button>
					{error && <h3 style={{ color: 'red' }}>{error}</h3>}
				</Container>
			</Form>
		</div>
	);
};

export default withRouter(Login);
