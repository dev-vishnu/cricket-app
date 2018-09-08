const express = require('express');
const jwt = require('jsonwebtoken');
const register = require('../controller/signUpController.js');
const login = require('../controller/loginController.js');
const logger = require('../winston/config.js');


const loginSignUp = express.Router();

loginSignUp.get('/', (req, res) => {
  res.render('loginSignUp');
});

loginSignUp.get('/home', (req, res) => {
  if (req.body.auth === true) {
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
    try {
      logger.info(`login successful for ${user.email}`);
      const token = await jwt.sign(user, 'hooooola');
      res.cookie('access_token', token);
      res.redirect('/home');
    } catch (err) {
      console.log(err);
    }
  }
});

loginSignUp.get('/logout', (req, res) => {
  res.clearCookie('access_token');
  res.render('loginSignUp');
});

module.exports = loginSignUp;
