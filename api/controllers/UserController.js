/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index(req, res) {
    const name = req.param('name');
    UserService.customFind(name)
      .then(res.ok)
      .catch(res.negotiate);
  },
  show(req, user) {
    const id = req.param('id');
    User.findOne({ id })
      .then(res.ok)
      .catch(res.negotiate);
  },
  create(req, res) {
    User.create(req.allParams())
      .then(res.created)
      .catch(res.badRequest);
  },
  remove(req, res) {
    const id = req.param('id');
    User.destroy({ id })
      .then(res.ok)
      .then(res.negotiate);
  },
};
