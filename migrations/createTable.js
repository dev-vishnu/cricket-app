const playerData = require('../models/players.json');
const matchData = require('../models/matches.json');
const connection = require('./setUpConnection');
const playerModel = require('../models/playerModel');
const matchModel = require('../models/matchModel');

async function create() {
  await connection.sync();
  await playerModel.bulkCreate(playerData.players);
  await matchModel.bulkCreate(matchData.matches);
}

create();
