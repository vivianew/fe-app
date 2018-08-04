import React from 'react';
import { Route, IndexRoute } from 'react-router';
import UserContainer from './containers/Users';
import App from './App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={UserContainer} />
  </Route>
);