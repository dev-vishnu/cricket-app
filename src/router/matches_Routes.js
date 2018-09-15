const express = require('express');
const matchController = require('../controller/matchesController.js');
const config = require('../config/dbConfig.js');
const logger = require('../common/winston_config.js');

const matches = express.Router();

matches.get('/', async (req, res) => {
  try {
    const matchData = await matchController.getMatchData(config);
    res.render('matches', { matches: matchData[0] });
  } catch (err) {
    logger.info(err);
  }
});

matches.get('/:id', async (req, res) => {
  try {
    const matchID = req.params.id;
    const match = await matchController.getMatchById(matchID, config);
    res.render('matchdetails', { match: match[0][0] });
  } catch (err) {
    logger.info(err);
  }
});

module.exports = matches;
