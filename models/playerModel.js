const Sequelize = require('sequelize');
const connection = require('../migrations/setUpConnection');
const Matches = require('../models/matchModel.js');

const Players = connection.define('players', {
  player_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  playername: Sequelize.STRING,
  age: Sequelize.INTEGER,
  born: Sequelize.STRING,
  birthplace: Sequelize.STRING,
  role: Sequelize.STRING,
  battingstyle: Sequelize.STRING,
  bowlingstyle: Sequelize.STRING,
});

Matches.belongsTo(Players);
module.exports = Players;
