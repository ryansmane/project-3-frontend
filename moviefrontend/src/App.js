import React from 'react';
import HeaderContainer from './components/HeaderContainer';
import Home from './components/Home';
import Movie from './components/Movie';
import User from './components/User';
import Create from './components/Create';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div>
      <div>
        <HeaderContainer />
      </div>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/new" component={Create} />
          <Route exact path="/movie" component={Movie} />
          <User />
        </Switch>
      </main>
    </div>
  );
};

export default App;
