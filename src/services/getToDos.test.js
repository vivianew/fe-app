import getToDos from './getToDos';
import axios from 'axios';

describe('getToDos service', () => {
  it('should get todos', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { id: 1 }
      })
    );
    const result = await getToDos();
    expect(result).toEqual({ id: 1 });
  });

  it('should return an error', async () => {
    const error = new Error('testError');
    axios.get.mockImplementationOnce(() => {
      throw error;
    });

    const result = await getToDos();
    expect(result).toEqual(error);
  });
});