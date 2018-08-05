import React from 'react';
import { Route, IndexRoute } from 'react-router';
import UserContainer from './containers/UsersContainer';
import AlbumContainer from './containers/AlbumContainer';
import PhotoContainer from './containers/PhotoContainer';
import PostsContainer from './containers/PostsContainer';
import ToDosContainer from './containers/ToDosContainer';
import App from './App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={UserContainer} />
    <Route path="/album" component={AlbumContainer} />
    <Route path="/photos" component={PhotoContainer} />
    <Route path="/posts" component={PostsContainer} />
    <Route path="/toDos" component={ToDosContainer} />
  </Route>
);