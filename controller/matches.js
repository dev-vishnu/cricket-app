const express = require('express');
const dataApi = require('../controller/matchesDataManager.js');

const matches = express.Router();

matches.get('/', (req, res) => {
  const promise = dataApi.getMatchData();
  promise.then((matchData) => {
    res.render('matches', matchData);
  });
});

matches.get('/:id', (req, res) => {
  const matchID = req.params.id;
  const promise = dataApi.getMatchById(matchID);
  promise.then(((matchDetails) => {
    res.render('matchdetails', matchDetails);
  }));
});

module.exports = matches;
