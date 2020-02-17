import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
const axios = require('axios');

const Login = (props) => {
	const [credentials, setCredentials] = useState({});
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	//redundancy needed to ensure credentials aren't empty
	// useEffect(() => {
	// 	const info = { email, password };
	// 	setCredentials(info);
	// }, [password]);

	const getInfoAndValidate = () => {
		const info = { email, password };
		setCredentials(info);
		axios
			.post('http://localhost:8080/api/user/login', info)
			.then((res) => console.log(res))
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
				<Button
					onClick={(evt) => {
						evt.preventDefault();
						getInfoAndValidate();

						console.log(credentials);
					}}
					variant="primary"
					type="submit"
				>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Login;
