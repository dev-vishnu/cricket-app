const request = require('supertest');
const app = require('../src/index.js');

describe('Testing User Registration', () => {
  it('Testing signup with correct credentials', (done) => {
    request(app).post('/register')
      .send({ username: 'f', password: 'vishnu' })
      .expect(302)
      .expect('location', '/login')
      .end(done);
  });
  it('Testing signup with incorrect credentials', (done) => {
    request(app).post('/register')
      .send({ username: 'vishnu', password: 'vishnu' })
      .expect(400)
      .end(done);
  });
});
