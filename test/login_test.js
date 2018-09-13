const expect = require('chai').expect;
const request = require('supertest');
const app = require('../src/index.js');


describe('Testing User login', () => {
  it('testing ("/login") routes with correct authentication', (done) => {
    request(app).post('/login')
      .send({ username: 'vishnu', password: 'vishnu' })
      .expect(302, 'Found. Redirecting to /home')
      .end(done);
  });
  it('testing ("/login") routes with incorrect authentication', (done) => {
    request(app).post('/login')
      .send({ username: 'vishnu', password: 'afcbkJH' })
      .expect(302, 'Found. Redirecting to /')
      .end(done);
  });
});
