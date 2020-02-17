import React from 'react';
import HeaderContainer from './components/HeaderContainer';
import Home from './components/Home';
import Movie from './components/Movie';
import User from './components/User';
import Submit from './components/Submit';
import Signup from './components/Signup';
import Login from './components/Login';
import { Route, Link, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
   return (
      <div>
         <div>
            <HeaderContainer />
         </div>
         <main>
            <Switch>
               <Route exact path='/' component={Home} />
               <Route exact path='/new' component={Submit} />
               <Route exact path='/movie/:id' component={Movie} />
               <Route exact path='/login' component={Login} />
               <Route exact path='/signup' component={Signup} />
               <User />
            </Switch>
         </main>
      </div>
   );
};

export default App;
