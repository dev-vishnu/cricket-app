
const express = require('express');
const dataApi = require('./data.js');

const router = express.Router();
const playerData = dataApi.getPlayerData();
const matchData = dataApi.getMatchData();

router.get('/', (req, res) => {
  res.render('home');
});


router.get('/home', (req, res) => {
  res.render('home');
});


router.get('/players', (req, res) => {
  res.render('players', playerData);
});

router.get('/playerdetails/:id', (req, res) => {
  const playerID = req.params.id;
  const playerDetails = dataApi.getPlayerById(playerID);
  res.render('playerdetails', playerDetails);
});


router.get('/matches', (req, res) => {
  res.render('matches', matchData);
});

router.get('/matchdetails/:id', (req, res) => {
  const matchID = req.params.id;
  const matchDetails = dataApi.getMatchById(matchID);
  res.render('matchdetails', matchDetails);
});


module.exports = router;
