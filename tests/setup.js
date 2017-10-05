const sails = require('sails');
// eslint-disable-next-line  import/no-extraneous-dependencies
const request = require('supertest');
// eslint-disable-next-line  import/no-extraneous-dependencies
const mockdate = require('mockdate');

mockdate.set('01-01-2017');
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

beforeAll(done => {
  sails.lift({}, err => {
    global.app = request(sails.hooks.http.app);
    done(err, sails);
  });
});

afterAll(sails.lower);
