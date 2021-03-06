import getUsers from './getUsers';
import axios from 'axios';

describe('getUsers service', () => {
  it('should get users', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { id: 1 }
      })
    );
    const result = await getUsers();
    expect(result).toEqual({ id: 1 });
  });

  it('should return an error', async () => {
    axios.get.mockImplementationOnce(() => {
      throw new Error('testError');
    });

    const result = await getUsers();
    expect(result).toEqual(new Error('testError'));
  });
});