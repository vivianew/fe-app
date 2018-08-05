export const FETCH_USERS = 'frontendApp/users/fetchUsers';
export const FETCH_USER_ALBUM = 'frontendApp/users/fetchAlbum';
export const FETCH_PHOTOS = 'frontendApp/users/fetchPhotos';
export const FETCH_POSTS = 'frontendApp/users/fetchPosts';
export const FETCH_COMMENTS = 'frontendApp/users/fetchComments';
export const FETCH_TODOS = 'frontendApp/users/getToDos';

export const initialState = {
  users: [],
  album: [],
  photos: [],
  posts: [],
  comments: [],
  toDos: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_USERS: {
      return {
        ...state,
        users: action.users
      }
    }
    case FETCH_USER_ALBUM: {
      return {
        ...state,
        album: action.album
      }
    }
    case FETCH_PHOTOS: {
      return {
        ...state,
        photos: action.photos
      }
    }
    case FETCH_POSTS: {
      return {
        ...state,
        posts: action.posts
      }
    }
    case FETCH_COMMENTS: {
      return {
        ...state,
        comments: action.comments
      }
    }
    case FETCH_TODOS: {
      return {
        ...state,
        toDos: action.toDos
      }
    }
    default:
      return state;
  }
}