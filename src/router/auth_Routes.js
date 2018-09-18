const express = require('express');
const passport = require('passport');
const axios = require('axios');

const logger = require('../common/winston_config.js');


const auth = express.Router();

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
  const result = await axios.post('http://localhost:3000/register', { username: user.username, password: user.password });
  if (!result.data) {
    res.send('Register failed');
  } else {
    logger.info(`${result.data.username} Registered`);
    res.redirect('/login');
  }
});

auth.post('/login', passport.authenticate('local', { successRedirect: '/home', failureRedirect: '/' }), (req, res) => {
  res.redirect('/home');
});

auth.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = auth;
