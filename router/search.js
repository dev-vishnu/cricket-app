const express = require('express');
const config = require('../config/dbConfig');
const playerSearchController = require('../controller/playerSearchController.js');

const search = express.Router();

search.get('/', async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const searchTerm = req.query;
      console.log(searchTerm);
      const playerData = await playerSearchController.getPlayerDataBySearch(config,
        searchTerm.search);
      await res.render('players', { players: playerData[0] });
    } catch (err) {
      console.log(err);
    }
  } else {
    res.redirect('/');
  }
});

module.exports = search;
