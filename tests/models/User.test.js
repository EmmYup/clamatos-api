describe('User Model', () => {
  it('should create a user', () =>
    User.create({
      name: 'testUser',
      password: '12345',
    }));
});
