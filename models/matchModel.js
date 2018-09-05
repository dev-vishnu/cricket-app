const Sequelize = require('sequelize');

const connection = require('../migrations/setUpConnection');


const Matches = connection.define('matches', {
  match_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  teams: Sequelize.STRING,
  date: Sequelize.STRING,
  location: Sequelize.STRING,
  matchname: Sequelize.STRING,
  toss: Sequelize.STRING,
  score: Sequelize.STRING,
  winner: Sequelize.STRING,
  mom: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Matches;
