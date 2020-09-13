import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin';
import Register from './Register';
import Home from './Home';

function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/admin'>
        <Admin />
      </Route>

      <Route exact path='/register'>
        <Register />
      </Route>
    </Switch>
  );
}

export default Routes;
