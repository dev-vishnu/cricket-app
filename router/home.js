const express = require('express');
const checkAuth = require('../controller/authentication.js');

const home = express.Router();


home.get('/', checkAuth, (req, res) => {
  res.render('home');
});

module.exports = home;
