import config from '../config';
import axios from 'axios';

export default async function getPhotos(albumId) {
  try {
    const result = await axios.get(`${config.fakeRestAPI}/photos?albumId=${albumId}`);

    return result.data;
  } catch (e) {
    console.log('getPhotos error:', e);
  }
}
