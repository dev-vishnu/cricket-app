const express = require('express');
const matchController = require('../controller/matchesController.js');
const config = require('../config/dbConfig');

const matches = express.Router();

matches.get('/', async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const matchData = await matchController.getMatchData(config);
      console.log(matchData);
      await res.render('matches', { matches: matchData[0] });
    } catch (err) {
      console.log(err);
    }
  } else {
    res.redirect('/');
  }
});

matches.get('/:id', async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const matchID = req.params.id;
      const match = await matchController.getMatchById(matchID, config);
      await res.render('matchdetails', { match: match[0][0] });
    } catch (err) {
      console.log(err);
    }
  } else {
    res.redirect('/');
  }
});

module.exports = matches;
