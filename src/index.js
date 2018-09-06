
const express = require('express');
const bodyParser = require('body-parser');
// const playerData = require('./data.js');

const app = express();
const home = require('../router/home.js');
const players = require('../router/players.js');
const matches = require('../router/matches.js');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// const data = playerData.getData();
app.use(express.static('public'));
app.use('/', home);
app.use('/home', home);
app.use('/players', players);
app.use('/players/:id', players);
app.use('/matches', matches);
app.use('/matches/:id', matches);

// app.get('/home.html', (req, res) => {
//   res.render('home', data);
// });
// app.get('/players.html', (req, res) => {
//   res.render('players', data);
// });
// app.get('/matches.html', (req, res) => {
//   res.render('matches', data);
// });
app.listen(4000);
