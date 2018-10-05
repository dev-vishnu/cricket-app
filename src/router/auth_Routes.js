import { Router } from 'express';
import passport from 'passport';
import axios from 'axios';

import token from '../config/auth_token';
import winston from '../common/winston_config';


const auth = Router();

auth.get('/', (req, res) => {
  res.render('login');
});

auth.get('/login', (req, res) => {
  res.render('login');
});

auth.get('/signUp', (req, res) => {
  res.render('signUp');
});

auth.post('/register', async (req, res) => {
  const user = req.body;
  const registerUrl = 'http://52.66.211.82:2000/auth/register';
  const result = await axios.post(registerUrl,
    { username: user.username, password: user.password, token });

  if (!result.data) {
    res.redirect('/');
  } else {
    winston.logger.info(`${result.data.username} Registered`);
    res.redirect('/');
  }
});

auth.post('/login', passport.authenticate('local',
  { successRedirect: '/home', failureRedirect: '/' }), (req, res) => {
  res.redirect('/home');
});

auth.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

export default auth;
