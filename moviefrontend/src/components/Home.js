import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

const Home = props => {
  return (
    <div>
      <h1>Home</h1>
      <main className="homeMain">
        <div className="homeList">
          <h2>Submissions by Genre</h2>
          <h3>Comedy</h3>
          <ul>
            <Link to="/movie">
              <li>Funny Movie</li>
            </Link>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h3>Romance</h3>
          <ul>
            <Link to="/movie">
              <li>First Love</li>
            </Link>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h3>Action</h3>
          <ul>
            <Link to="/movie">
              <li>Die Another Day</li>
            </Link>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h3>Horror</h3>
          <ul>
            <Link to="/movie">
              <li>The Conjuring</li>
            </Link>
            <li></li>
            <li></li>
            <li></li>
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
