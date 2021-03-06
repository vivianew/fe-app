export const FETCH_USERS = 'frontendApp/users/fetchUsers';
export const FETCH_USER_ALBUM = 'frontendApp/users/fetchAlbum';
export const FETCH_PHOTOS = 'frontendApp/users/fetchPhotos';
export const FETCH_POSTS = 'frontendApp/users/fetchPosts';
export const FETCH_COMMENTS = 'frontendApp/users/fetchComments';
export const FETCH_TODOS = 'frontendApp/users/fetchToDos';
export const FETCH_SELECTED_USER_INFO = 'frontendApp/users/fetchSelectedUser';
export const FETCH_SELECTED_ALBUM = 'frontendApp/users/fetchSelectedAlbum';

export const initialState = {
  users: [],
  album: [],
  photos: [],
  posts: [],
  comments: [],
  toDos: [],
  selectedUser: {},
  selectedAlbum: {}
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
    case FETCH_SELECTED_USER_INFO: {
      return {
        ...state,
        selectedUser: action.selectedUser
      }
    }
    case FETCH_SELECTED_ALBUM: {
      return {
        ...state,
        selectedAlbum: action.selectedAlbum
      }
    }
    default:
      return state;
  }
}