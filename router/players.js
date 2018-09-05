
const express = require('express');
const dataApi = require('../controller/playersDataManager.js');

const players = express.Router();

players.get('/', (req, res) => {
  dataApi.getPlayerData(req, res);
});

players.get('/:id', (req, res) => {
  const playerID = req.params.id;
  dataApi.getPlayerById(playerID, req, res);
});

module.exports = players;
