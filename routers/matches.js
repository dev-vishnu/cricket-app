const express = require('express');
const dataApi = require('../controller/matchController.js');

const matches = express.Router();


matches.get('/', async (req, res) => {
  try {
    const data = await dataApi.getMatchData();
    await res.render('matches', { matches: data });
  } catch (err) {
    console.log(err);
  }
});

matches.get('/:id', async (req, res) => {
  const matchId = req.params.id;
  try {
    const data = await dataApi.getMatchById(matchId);
    res.render('matchdetails', { match: data });
  } catch (err) {
    console.log(err);
  }
});

module.exports = matches;
