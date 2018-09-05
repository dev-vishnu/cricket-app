
const express = require('express');
const dataApi = require('../controller/playerController.js');

const players = express.Router();

players.get('/', async (req, res) => {
  try {
    const data = await dataApi.getPlayerData();
    res.render('players', { players: data });
  } catch (err) {
    console.log(err);
  }
});

players.get('/:id', async (req, res) => {
  const playerID = req.params.id;
  try {
    const data = await dataApi.getPlayerById(playerID);
    res.render('playerdetails', { player: data });
  } catch (err) {
    console.log(err);
  }
});

module.exports = players;
