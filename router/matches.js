const express = require('express');
const dataApi = require('../controller/matchesController.js');

const matches = express.Router();

matches.get('/', async (req, res) => {
  try {
    const matchData = await dataApi.getMatchData(req, res);
    console.log(matchData);
    await res.render('matches', { matches: matchData[0] });
  } catch (err) {
    console.log(err);
  }
});

matches.get('/:id', async (req, res) => {
  try {
    const matchID = req.params.id;
    const match = await dataApi.getMatchById(matchID);
    await res.render('matchdetails', { match: match[0][0] });
  } catch (err) {
    console.log(err);
  }
});

module.exports = matches;
