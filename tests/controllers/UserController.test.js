describe('UserController', () => {
  beforeAll(() =>
    Promise.all([
      User.create({ name: 'user1', password: '12345', type: 'admin' }),
      User.create({ name: 'user2', password: '12345', type: 'employee' }),
      User.create({ name: 'user3', password: '12345', type: 'employee' }),
    ])
  );
  describe('index', () => {
    it('should find employee users', () =>
      app
        .get('/user')
        .expect(200)
        .then(({ body }) => expect(body).toMatchSnapshot()));
  });
  describe('index', () => {
    it('should find users by name if it is provided', () =>
      app
        .get('/user?name=user3')
        .expect(200)
        .then(({ body }) => expect(body).toMatchSnapshot()));
  });
  describe('show', () => {
    it('should return a single user', () =>
      app
        .get('/user/1')
        .expect(200)
        .then(({ body }) => expect(body).toMatchSnapshot()));
  });
  describe('create', () => {
    it('should create a user', () =>
      app
        .post('/user?name=user4&password=12345&type=employee')
        .expect(201)
        .then(({ body }) => expect(body).toMatchSnapshot()));
  });
  describe('remove', () => {
    it('should delete a user', () => app.delete('/user/2').expect(200));
  });
});
