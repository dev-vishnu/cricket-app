
const express = require('express');
const dataApi = require('../controller/dataManager.js');


const players = express.Router();

players.get('/', (req, res) => {
  const playerData = dataApi.getPlayerData();
  res.render('players', playerData);
});

players.get('/:id', (req, res) => {
  const playerID = req.params.id;
  const playerDetails = dataApi.getPlayerById(playerID);
  res.render('playerdetails', playerDetails);
});

module.exports = players;
