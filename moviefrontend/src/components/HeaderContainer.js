import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const HeaderContainer = (props) => {
	return (
		<div>
			<nav className="nav-bar">
				<h3>cinopsis</h3>
				<Link to="/">
					<h3>Home</h3>
				</Link>
				{localStorage.id && (
					<Link to="/new">
						<h3>Submit</h3>
					</Link>
				)}
				{!localStorage.id && (
					<Link to="/login">
						<h3>Log in</h3>
					</Link>
				)}
				{localStorage.username && (
					<div>
						<h3>Signed in as: {localStorage.username}</h3>
						<Button
							href="/"
							onClick={() => {
								localStorage.clear();
								console.log('logging out');
							}}
						>
							Logout
						</Button>
					</div>
				)}
			</nav>
		</div>
	);
};

export default HeaderContainer;
