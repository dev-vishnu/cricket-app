const express = require('express');
const dataApi = require('../controller/matchesDataManager.js');

const matches = express.Router();

matches.get('/', (req, res) => {
  dataApi.getMatchData(req, res);
});

matches.get('/:id', (req, res) => {
  const matchID = req.params.id;
  dataApi.getMatchById(matchID, req, res);
});

module.exports = matches;
