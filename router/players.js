
const express = require('express');
const playerController = require('../controller/playersController.js');

const players = express.Router();

players.get('/', async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const playerData = await playerController.getPlayerData(req, res);
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
      const player = await playerController.getPlayerById(playerID);
      await res.render('playerdetails', player[0][0]);
    } catch (err) {
      console.log(err);
    }
  } else {
    res.redirect('/');
  }
});

module.exports = players;
