const expect = require('chai').expect;
const request = require('supertest');
const app = require('../src/index.js');


describe('Testing Protected Routes without authentication', () => {
  it('Testing routes ("/") without authentication', (done) => {
    request(app).get('/')
      .expect(200)
      .end(done);
  });
  it('Testing routes ("/signUp") without authentication', (done) => {
    request(app).get('/signUp')
      .expect(200)
      .end(done);
  });
  it('Testing routes ("/login") without authentication', (done) => {
    request(app).get('/login')
      .expect(200)
      .end(done);
  });
  it('Testing routes ("/home") without authentication', (done) => {
    request(app).get('/home')
      .expect(302)
      .expect('location', '/')
      .end(done);
  });
  it('Testing routes ("/players")without authentication', (done) => {
    request(app).get('/players')
      .expect(302)
      .expect('location', '/')
      .end(done);
  });
  it('Testing routes ("/matches")without authentication', (done) => {
    request(app).get('/matches')
      .expect(302)
      .expect('location', '/')
      .end(done);
  });
});

describe('Testing protected routes with correct authentication', () => {
  const authenticatedUser = request.agent(app);
  it('Testing login in with correct authentication', (done) => {
    authenticatedUser.post('/login')
      .send({ username: 'vishnu', password: 'vishnu' })
      .expect(302)
      .expect('location', '/home')
      .end(done);
  });
  it('Testing ("/home") routes with correct authentication', (done) => {
    authenticatedUser.get('/home')
      .expect(200)
      .end(done);
  });
  it('Testing ("/players") routes with correct authentication', (done) => {
    authenticatedUser.get('/players')
      .expect(200)
      .end(done);
  });
  it('Testing ("/matches") routes with correct authentication', (done) => {
    authenticatedUser.get('/matches')
      .expect(200)
      .end(done);
  });
});
