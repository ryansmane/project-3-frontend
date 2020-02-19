import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios');

const User = (props) => {
	const [userData, setUserData] = useState();

	const url = `https://cinopsis.herokuapp.com/api/user/${props.match.params.id}`;

	useEffect(() => {
		axios.get(url).then((res) => {
			console.log(res.data);
			setUserData(res.data);
		});
	}, [url]);

	return (
		<div>
			{userData && (
				<>
					<h2>{userData.user.userName}</h2>
					<ul>
						{userData.movies.map((movie) => {
							return (
								<li>
									<Link to={`/movie/${movie._id}`}>
										{' '}
										{movie.title}
									</Link>
								</li>
							);
						})}
					</ul>
				</>
			)}
		</div>
	);
};

export default User;
