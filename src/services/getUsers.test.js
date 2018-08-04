import getUsers from "./getUsers";

describe('getUsers', () => {
  it('should work', async () => {
    console.log('i hate you');
    const result = await getUsers();
    console.log('result', result);
  })
});