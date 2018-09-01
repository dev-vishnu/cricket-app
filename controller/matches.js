const express = require('express');
const dataApi = require('../controller/dataManager.js');

const matches = express.Router();

matches.get('/', (req, res) => {
  const matchData = dataApi.getMatchData();
  res.render('matches', matchData);
});

matches.get('/:id', (req, res) => {
  const matchID = req.params.id;
  const matchDetails = dataApi.getMatchById(matchID);
  res.render('matchdetails', matchDetails);
});

module.exports = matches;
