import getUsers from '../services/getUsers';
import getAlbums from '../services/getAlbums';
import getPhotos from '../services/getPhotos';
import getPosts from '../services/getPosts';
import getComments from '../services/getComments';
import getToDos from '../services/getToDos';
import {
  FETCH_USERS,
  FETCH_USER_ALBUM,
  FETCH_PHOTOS,
  FETCH_POSTS,
  FETCH_COMMENTS,
  FETCH_TODOS
} from '../reducers/usersReducer';

export function fetchUsers() {
  return async (dispatch) => {
    try {
      const result = await getUsers();

      dispatch({
        type: FETCH_USERS,
        users: result
      });
    } catch (e) {
      console.log('fetchUsers Action Error:', e);
    }
  }
}

export function fetchUserAlbum(userId) {
  return async (dispatch) => {
    try {
      const albums = await getAlbums(userId);

      dispatch({
        type: FETCH_USER_ALBUM,
        album: albums
      });
    } catch (e) {
      console.log('fetchUserAlbum Action Error:', e);
    }
  }
}

export function fetchPhotos(albumId) {
  return async (dispatch) => {
    try {
      const photos = await getPhotos(albumId);

      dispatch({
        type: FETCH_PHOTOS,
        photos
      });
    } catch (e) {
      console.log('fetchPhotos Action Error:', e);
    }
  }
}

export function fetchPosts(userId) {
  return async (dispatch) => {
    try {
      const posts = await getPosts(userId);

      dispatch({
        type: FETCH_POSTS,
        posts
      })
    } catch (e) {
      console.log('fetchPosts Action Error:', e)
    }
  }
}

export function fetchPostComments(postId) {
  return async (dispatch) => {
    try {
      const comments = await getComments(postId);

      dispatch({
        type: FETCH_COMMENTS,
        comments
      })
    } catch (e) {
      console.log('fetchPostComments Action Error:', e)
    }
  }
}

export function fetchToDos(userId) {
  return async (dispatch) => {
    try {
      const toDos = await getToDos(userId);

      dispatch({
        type: FETCH_TODOS,
        toDos
      })
    } catch (e) {
      console.log('fetchToDos Action Error:', e)
    }
  }
}