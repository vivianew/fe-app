import getComments from './getComments';
import axios from 'axios';

describe('getComments service', () => {
  it('should get comments', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { id: 1 }
      })
    );
    const result = await getComments();
    expect(result).toEqual({ id: 1 });
  });

  it('should return an error', async () => {
    const error = new Error('testError');
    axios.get.mockImplementationOnce(() => {
      throw error;
    });

    const result = await getComments();
    expect(result).toEqual(error);
  });
});