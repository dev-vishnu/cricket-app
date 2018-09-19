import request from 'supertest';
import app from '../src/index';

describe('Testing User login', () => {
  it('Testing login with incorrect credentials', (done) => {
    request(app).post('/login')
      .send({ username: 'vishnu', password: 'afcbkJH' })
      .expect(302)
      .expect('location', '/')
      .end(done);
  });
  it('Testing login with correct credentials', (done) => {
    request(app).post('/login')
      .send({ username: 'vishnu', password: 'vishnu' })
      .expect(302)
      .expect('location', '/home')
      .end(done);
  });
});
