import getPosts from './getPosts';
import axios from 'axios';

describe('getPosts service', () => {
  it('should get posts', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { id: 1 }
      })
    );
    const result = await getPosts();
    expect(result).toEqual({ id: 1 });
  });

  it('should return an error', async () => {
    const error = new Error('testError');
    axios.get.mockImplementationOnce(() => {
      throw error;
    });

    const result = await getPosts();
    expect(result).toEqual(error);
  });
});