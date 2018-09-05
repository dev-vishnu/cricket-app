const express = require('express');
const dataApi = require('../controller/matchesDataManager.js');

const matches = express.Router();


matches.get('/', async (req, res) => {
  const data = await dataApi.getMatchData();
  await res.render('matches', { matches: data });
});

matches.get('/:id', async (req, res) => {
  const matchId = req.params.id;
  const data = await dataApi.getMatchById(matchId);
  console.log(data.matchname);
  res.render('matchdetails', { match: data });
});

module.exports = matches;
