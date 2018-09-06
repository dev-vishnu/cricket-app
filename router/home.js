const express = require('express');
const bcrypt = require('bcrypt');
const authDB = require('../config/signIn.js');

const home = express.Router();

home.get('/', (req, res) => {
  res.render('home');
});

home.get('/home', (req, res) => {
  res.render('home');
});

home.post('/register', async (req, res) => {
  try {
    const user = await (req.body);
    const dbo = await authDB.authDB();
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    await dbo.collection('user').insertOne(user);
    res.send(`User Registered: ${user.email}`);
  } catch (err) {
    res.send('Register failed');
    console.log(err);
  }
});

module.exports = home;
