import getUsers from "../services/getUsers";
import { FETCH_USERS } from "../reducers/usersReducer";

export function fetchUsers() {
  return async (dispatch) => {
    try {
      const result = await getUsers();
      console.log('ress', result);
      dispatch({
        type: FETCH_USERS,
        users: result
      });
    } catch (e) {
      console.log('fetchUsers Action Error:', e);
    }
  }
}