import config from '../config';
import axios from 'axios';

export default async function getUsers() {
  try {
    const result = await axios.get(`${config.fakeRestAPI}/users`);

    return result.data;
  } catch (e) {
    console.log('getUsers error:', e);
  }
}
