
const express = require('express');
const playerData = require('./data.js');

const app = express();

app.set('view engine', 'ejs');


const data = playerData.getData();
app.use(express.static('public'));


app.get('/home.html', (req, res) => {
  res.render('home', data);
});
app.get('/players.html', (req, res) => {
  res.render('players', data);
});
app.get('/matches.html', (req, res) => {
  res.render('matches', data);
});
app.listen(4000);
