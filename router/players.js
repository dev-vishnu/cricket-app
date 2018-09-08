
const express = require('express');
const playerController = require('../controller/playersController.js');
// const auth = require('../controller/authentication.js');

const players = express.Router();

players.get('/', async (req, res) => {
  if (req.body.auth === true) {
    try {
      const playerData = await playerController.getPlayerData(req, res);
      await res.render('players', { players: playerData[0] });
      req.body.auth = false;
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log(req);
    res.send('Access Denied');
  }
});

players.get('/:id', async (req, res) => {
  if (req.body.auth === true) {
    try {
      const playerID = req.params.id;
      const player = await playerController.getPlayerById(playerID);
      await res.render('playerdetails', player[0][0]);
    } catch (err) {
      console.log(err);
    }
  } else {
    res.send('Access Denied');
  }
});

module.exports = players;
