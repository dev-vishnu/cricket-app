const express = require('express');

const home = express.Router();


home.get('/home', (req, res) => {
  res.render('home');
});

module.exports = home;
