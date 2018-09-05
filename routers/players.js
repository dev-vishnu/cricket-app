
const express = require('express');
const dataApi = require('../controller/playersDataManager.js');

const players = express.Router();

players.get('/', async (req, res) => {
  const data = await dataApi.getPlayerData();
  await res.render('players', { players: data });
});

players.get('/:id', async (req, res) => {
  const playerID = req.params.id;
  const data = await dataApi.getPlayerById(playerID);
  res.render('playerdetails', { player: data });
});

module.exports = players;
