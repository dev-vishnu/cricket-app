
const request = require('supertest');
const app = require('../src/index.js');

const agent = request.agent(app);


describe('Testing Protected Routes without authentication', () => {
  it('Testing routes ("/") without authentication', (done) => {
    agent.get('/')
      .expect(200)
      .end(done);
  });
  it('Testing routes ("/signUp") without authentication', (done) => {
    agent.get('/signUp')
      .expect(200)
      .end(done);
  });
  it('Testing routes ("/login") without authentication', (done) => {
    agent.get('/login')
      .expect(200)
      .end(done);
  });
  it('Testing routes ("/home") without authentication', (done) => {
    agent.get('/home')
      .expect(302)
      .expect('location', '/')
      .end(done);
  });
  it('Testing routes ("/players")without authentication', (done) => {
    agent.get('/players')
      .expect(302)
      .expect('location', '/')
      .end(done);
  });
  it('Testing routes ("/matches")without authentication', (done) => {
    agent.get('/matches')
      .expect(302)
      .expect('location', '/')
      .end(done);
  });
});

describe('Testing protected routes with correct authentication', () => {
  beforeEach((done) => {
    agent.post('/login')
      .send({ username: 'vishnu', password: 'vishnu' })
      .expect(302)
      .expect('location', '/home')
      .end(done);
  });
  afterEach((done) => {
    agent.get('/logout')
      .expect(302)
      .expect('location', '/')
      .end(done);
  });
  it('Testing ("/home") routes with correct authentication', (done) => {
    agent.get('/home')
      .expect(200)
      .end(done);
  });
  it('Testing ("/players") routes with correct authentication', (done) => {
    agent.get('/players')
      .expect(200)
      .end(done);
  });
  it('Testing ("/matches") routes with correct authentication', (done) => {
    agent.get('/matches')
      .expect(200)
      .end(done);
  });
  it('Testing ("/search") routes with correct authentication', (done) => {
    agent.get('/search')
      .expect(200)
      .end(done);
  });
});
