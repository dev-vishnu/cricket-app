const express = require('express');
const checkAuth = require('../controller/authentication.js');
const matchController = require('../controller/matchesController.js');
const config = require('../config/dbConfig');

const matches = express.Router();

matches.get('/', checkAuth, async (req, res) => {
  try {
    const matchData = await matchController.getMatchData(config);
    await res.render('matches', { matches: matchData[0] });
  } catch (err) {
    console.log(err);
  }
});

matches.get('/:id', checkAuth, async (req, res) => {
  try {
    const matchID = req.params.id;
    const match = await matchController.getMatchById(matchID, config);
    await res.render('matchdetails', { match: match[0][0] });
  } catch (err) {
    console.log(err);
  }
});

module.exports = matches;
