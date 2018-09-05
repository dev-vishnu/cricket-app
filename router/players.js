
const express = require('express');
const dataApi = require('../controller/playersController.js');

const players = express.Router();

players.get('/', async (req, res) => {
  try {
    const playerData = await dataApi.getPlayerData(req, res);
    await res.render('players', { players: playerData[0] });
  } catch (err) {
    console.log(err);
  }
});

players.get('/:id', async (req, res) => {
  try {
    const playerID = req.params.id;
    const player = await dataApi.getPlayerById(playerID);
    await res.render('playerdetails', player[0][0]);
  } catch (err) {
    console.log(err);
  }
});

module.exports = players;
