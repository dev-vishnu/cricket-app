const express = require('express');
const playersController = require('../controller/playersController.js');
const logger = require('../winston/config.js');

const search = express.Router();

search.get('/', async (req, res) => {
  try {
    const searchTerm = req.query;
    const playerData = await playersController.getPlayerDataBySearch(searchTerm.search);
    res.render('players', { players: playerData[0] });
  } catch (err) {
    logger.info(err);
  }
});

module.exports = search;
