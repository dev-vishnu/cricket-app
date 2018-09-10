const express = require('express');
const passport = require('passport');


const register = require('../controller/signUpController.js');
const logger = require('../winston/config.js');


const loginSignUp = express.Router();

loginSignUp.get('/', (req, res) => {
  res.render('login');
});

loginSignUp.get('/login', (req, res) => {
  res.render('login');
});
loginSignUp.get('/signUp', (req, res) => {
  res.render('signUp');
});

loginSignUp.get('/home', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('home');
  } else {
    res.redirect('/');
  }
});

loginSignUp.post('/register', async (req, res) => {
  const user = (req.body);
  const result = await register.registerUser(user);
  if (!result) {
    res.send('Register failed');
    logger.info(`Registration failed for ${user.username}`);
  } else {
    logger.info(`${result.ops[0].username} Registered`);
    res.redirect('/login');
  }
});

loginSignUp.post('/login', passport.authenticate('local', { failureRedirect: '/', successRedirect: '/home' }), (req, res) => {
  res.redirect('/home');
});

loginSignUp.get('/logout', (req, res) => {
  req.session.destroy();
  res.render('login');
});

module.exports = loginSignUp;
