
const express = require('express');
const config = require('../config/dbConfig');
const playerController = require('../controller/playersController.js');
const getPlayerStats = require('../controller/getPlayerStats.js');


const players = express.Router();

players.get('/', async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const playerData = await playerController.getPlayerData(config);
      await res.render('players', { players: playerData[0] });
    } catch (err) {
      console.log(err);
    }
  } else {
    res.redirect('/');
  }
});

players.get('/:id', async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const playerID = req.params.id;
      const player = await playerController.getPlayerById(playerID, config);
      const playerstats = (await getPlayerStats.getPlayerStats(player[0][0].pid)).data;
      const bowlingstats = playerstats.data.bowling;
      const battingstats = playerstats.data.batting;
      await res.render('playerdetails',
        {
          player: player[0][0], playerstats, bowlingstats, battingstats,
        });
    } catch (err) {
      console.log(err);
    }
  } else {
    res.redirect('/');
  }
});


module.exports = players;
