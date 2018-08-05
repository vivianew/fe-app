import config from '../config';
import axios from 'axios';

export default async function getAlbums(userId) {
  try {
    const result = await axios.get(`${config.fakeRestAPI}/albums?userId=${userId}
    `);

    return result.data;
  } catch (e) {
    console.log('getAlbums error:', e);
  }
}
