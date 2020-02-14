import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'

const HeaderContainer = props => {
   return (
      <div>
         <nav className='nav-bar'>
            <h3>Movie App</h3>
               <Link to='/'><h3>Home</h3></Link>
               <Link to='/new'><h3>Submit</h3></Link>
               <Link to='/login'><h3>Log in</h3></Link>
         </nav>
      </div>
   );
};

export default HeaderContainer;
