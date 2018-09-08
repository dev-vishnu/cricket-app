const express = require('express');
const register = require('../controller/signUpController.js');
const login = require('../controller/loginController.js');
const logger = require('../winston/config.js');


const loginSignUp = express.Router();

loginSignUp.get('/', (req, res) => {
  res.render('loginSignUp');
});

loginSignUp.get('/home', (req, res) => {
  if (req.session.user !== undefined) {
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
    logger.info(`Registration failed for ${user.email}`);
  } else {
    logger.info(`${result.ops[0].email} Registered`);
    res.send(`${result.ops[0].email} Registered`);
  }
});

loginSignUp.post('/login', async (req, res) => {
  const user = req.body;
  const status = login.loginUser(user);
  if (!status) {
    res.send('login failed');
    logger.info(`login failed for ${user.email}`);
  } else {
    logger.info(`login successful for ${user.email}`);
    req.session.user = user;
    req.session.save();
    res.redirect('/home');
  }
});

loginSignUp.get('/logout', (req, res) => {
  req.session.destroy();
  res.render('loginSignUp');
});

module.exports = loginSignUp;
