const Sequelize = require('sequelize');
const playerData = require('../models/players.json');
const matchData = require('../models/matches.json');

const connection = new Sequelize('cricket_DB', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const Players = connection.define('players', {
  playername: Sequelize.STRING,
  age: Sequelize.INTEGER,
  born: Sequelize.STRING,
  birthplace: Sequelize.STRING,
  role: Sequelize.STRING,
  battingstyle: Sequelize.STRING,
  bowlingstyle: Sequelize.STRING,
});
const Matches = connection.define('matches', {
  teams: Sequelize.STRING,
  date: Sequelize.STRING,
  location: Sequelize.STRING,
  matchname: Sequelize.STRING,
  toss: Sequelize.STRING,
  score: Sequelize.STRING,
  winner: Sequelize.STRING,
  mom: Sequelize.INTEGER,
});
async function createDB() {
  await Players.sync();
  await Matches.sync();
  playerData.players.forEach((element) => {
    Players.create({
      playername: element.playername,
      age: element.age,
      born: element.born,
      birthplace: element.birthplace,
      role: element.role,
      battingstyle: element.battingstyle,
      bowlingstyle: element.bowlingstyle,
    });
  });
  matchData.matches.forEach((element) => {
    Matches.create({
      teams: element.teams,
      date: element.date,
      location: element.location,
      matchname: element.match,
      toss: element.toss,
      score: element.score,
      winner: element.winner,
      mom: element.mom,
    });
  });
}

createDB();
