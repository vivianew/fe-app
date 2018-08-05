import userReducer, {
  initialState,
  FETCH_USERS,
  FETCH_USER_ALBUM,
  FETCH_PHOTOS,
  FETCH_POSTS,
  FETCH_COMMENTS,
  FETCH_TODOS,
  FETCH_SELECTED_USER_INFO,
  FETCH_SELECTED_ALBUM
} from './usersReducer';

describe('User reducer', () => {
  it('should default', () => {
    expect(userReducer()).toBe(initialState)
  });

  it('should handle FETCH_USERS', () => {
    const newState = userReducer(initialState, {
      type: FETCH_USERS,
      users: ['123']
    });

    expect(newState).toEqual({
      ...initialState,
      users: ['123']
    });
  });

    it('should handle FETCH_USER_ALBUM', () => {
      const newState = userReducer(initialState, {
        type: FETCH_USER_ALBUM,
        album: ['album 1']
      });

      expect(newState).toEqual({
        ...initialState,
        album: ['album 1']
      });
    });

    it('should handle FETCH_PHOTOS', () => {
      const newState = userReducer(initialState, {
        type: FETCH_PHOTOS,
        photos: ['photo 1']
      });

      expect(newState).toEqual({
        ...initialState,
        photos: ['photo 1']
      });
    });

    it('should handle FETCH_POSTS', () => {
      const newState = userReducer(initialState, {
        type: FETCH_POSTS,
        posts: ['post 1']
      });

      expect(newState).toEqual({
        ...initialState,
        posts: ['post 1']
      });
    });

    it('should handle FETCH_COMMENTS', () => {
      const newState = userReducer(initialState, {
        type: FETCH_COMMENTS,
        comments: ['comment 1']
      });

      expect(newState).toEqual({
        ...initialState,
        comments: ['comment 1']
      });
    });

    it('should handle FETCH_TODOS', () => {
      const newState = userReducer(initialState, {
        type: FETCH_TODOS,
        toDos: ['to do 1']
      });

      expect(newState).toEqual({
        ...initialState,
        toDos: ['to do 1']
      });
    });

    it('should handle FETCH_SELECTED_USER_INFO', () => {
      const newState = userReducer(initialState, {
        type: FETCH_SELECTED_USER_INFO,
        selectedUser: { username: 'marco polo', id: '1' }
      });

      expect(newState).toEqual({
        ...initialState,
        selectedUser: { username: 'marco polo', id: '1' }
      });
    });

    it('should handle FETCH_SELECTED_ALBUM', () => {
      const newState = userReducer(initialState, {
        type: FETCH_SELECTED_ALBUM,
        selectedAlbum: { title: 'my great holiday', id: '1'}
      });

      expect(newState).toEqual({
        ...initialState,
        selectedAlbum: { title: 'my great holiday', id: '1'}
      });
    });
});
