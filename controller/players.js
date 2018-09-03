
const express = require('express');
const dataApi = require('../controller/playersDataManager.js');

const players = express.Router();

players.get('/', (req, res) => {
  const promise = dataApi.getPlayerData();
  promise.then((playerData) => {
    res.render('players', playerData);
  });
});

players.get('/:id', (req, res) => {
  const playerID = req.params.id;
  const promise = dataApi.getPlayerById(playerID);
  promise.then((playerDetails) => {
    res.render('playerdetails', playerDetails);
  });
});

module.exports = players;
