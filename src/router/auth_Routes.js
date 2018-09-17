const express = require('express');
const passport = require('passport');


const register = require('../controller/authController.js');
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
  const user = (req.body);
  const result = await register.registerUser(user);
  if (!result) {
    res.sendStatus(400);
    res.send('Register failed');
    logger.info(`Registration failed for ${user.username}`);
  } else {
    logger.info(`${result.ops[0].username} Registered`);
    res.redirect('/login');
  }
});

auth.post('/login', passport.authenticate('local', { failureRedirect: '/', successRedirect: '/home' }), (req, res) => {
  res.redirect('/home');
});

auth.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = auth;
