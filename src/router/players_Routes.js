
const express = require('express');
const config = require('../config/dbConfig');
const playerController = require('../controller/playersController');
const logger = require('../winston/config.js');


const players = express.Router();

players.get('/', async (req, res) => {
  try {
    const playerData = await playerController.getPlayerData(config);
    res.render('players', { players: playerData[0] });
  } catch (err) {
    logger.log(err);
  }
});

players.get('/:id', async (req, res) => {
  try {
    const playerID = req.params.id;
    const player = await playerController.getPlayerById(playerID, config);
    const playerstats = (await playerController.getPlayerStats(player[0][0].pid)).data;
    const bowlingstats = playerstats.data.bowling;
    const battingstats = playerstats.data.batting;
    res.render('playerdetails',
      {
        player: player[0][0], playerstats, bowlingstats, battingstats,
      });
  } catch (err) {
    logger.info(err);
  }
});


module.exports = players;
