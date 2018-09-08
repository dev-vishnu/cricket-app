const express = require('express');
const matchController = require('../controller/matchesController.js');
// const auth = require('../controller/authentication.js');

const matches = express.Router();

matches.get('/', async (req, res) => {
  if (req.body.auth === true) {
    try {
      const matchData = await matchController.getMatchData(req, res);
      console.log(matchData);
      await res.render('matches', { matches: matchData[0] });
    } catch (err) {
      console.log(err);
    }
  } else {
    res.send('Access Denied');
  }
});

matches.get('/:id', async (req, res) => {
  if (req.body.auth === true) {
    try {
      const matchID = req.params.id;
      const match = await matchController.getMatchById(matchID);
      await res.render('matchdetails', { match: match[0][0] });
    } catch (err) {
      console.log(err);
    }
  } else {
    res.send('Access Denied');
  }
});

module.exports = matches;
