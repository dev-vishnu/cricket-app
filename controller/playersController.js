// const playerData = require('../models/players.json');
// const matchData = require('../models/matches.json');
const mysql = require('mysql2/promise');
const config = require('../config/config.js');

async function getPlayerData() {
  let result;
  const query = 'select * from players';
  try {
    const connection = await mysql.createConnection(config);
    try {
      result = await connection.execute(query);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
  return result;
}


async function getPlayerById(id) {
  const query = 'select*from players where player_id = ?';
  let result;
  try {
    const connection = await mysql.createConnection(config);
    try {
      result = await connection.execute(query, [id]);
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
  return result;
}

module.exports.getPlayerData = getPlayerData;
module.exports.getPlayerById = getPlayerById;
