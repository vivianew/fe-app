import getAlbums from './getAlbums';
import axios from 'axios';

describe('getAlbums service', () => {
  it('should get albums', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { id: 1 }
      })
    );
    const result = await getAlbums();
    expect(result).toEqual({ id: 1 });
  });

  it('should return an error', async () => {
    const error = new Error('testError');
    axios.get.mockImplementationOnce(() => {
      throw error;
    });

    const result = await getAlbums();
    expect(result).toEqual(error);
  });
});