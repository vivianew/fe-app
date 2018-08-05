import config from '../config';
import axios from 'axios';

export default async function getPosts(userId) {
  try {
    const result = await axios.get(`${config.fakeRestAPI}/posts?userId=${userId}`);

    return result.data;
  } catch (e) {
    return e;
  }
}
