import config from '../config';
import axios from 'axios';

export default async function getComments(postId) {
  try {
    const result = await axios.get(`${config.fakeRestAPI}/comments?postId=${postId}`);

    return result.data;
  } catch (e) {
    return e;
  }
}
