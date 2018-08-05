import config from '../config';
import axios from 'axios';

export default async function getToDos(userId) {
  try {
    const result = await axios.get(`${config.fakeRestAPI}/todos?userId=${userId}`);

    return result.data;
  } catch (e) {
    return e;
  }
}
