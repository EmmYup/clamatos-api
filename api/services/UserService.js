module.exports = {
  customFind(name) {
    if (name) {
      return User.find({ name: { like: `%${name}%` } });
    }
    return User.find({ type: 'employee' });
  },
};
