import getPhotos from './getPhotos';
import axios from 'axios';

describe('getPhotos service', () => {
  it('should get photos', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { id: 1 }
      })
    );
    const result = await getPhotos();
    expect(result).toEqual({ id: 1 });
  });

  it('should return an error', async () => {
    const error = new Error('testError');
    axios.get.mockImplementationOnce(() => {
      throw error;
    });

    const result = await getPhotos();
    expect(result).toEqual(error);
  });
});