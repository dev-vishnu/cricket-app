const mysql = require('mysql2/promise');
const axios = require('axios');
const config = require('../config/dbConfig.js');
const query = require('../models/sql_queries/queries.js');
const logger = require('../common/winston_config.js');

async function getPlayerData() {
  let result;
  try {
    const connection = await mysql.createConnection(config);
    result = await connection.execute(query.querySelectAllPlayers);
    await connection.end();
  } catch (error) {
    logger.info(error);
  }
  return result;
}


async function getPlayerById(id) {
  let result;
  try {
    const connection = await mysql.createConnection(config);
    result = await connection.execute(query.querySelectAllPlayerById, [id]);
    await connection.end();
  } catch (err) {
    logger.info(err);
  }
  return result;
}

async function getPlayerStats(pid) {
  const apiKey = ('7u62tyv5a8S8BhXI8e3nwpiDUk62');
  let result;
  try {
    result = await axios.get(`https://cricapi.com/api/playerStats?apikey=${apiKey}&pid=${pid}`);
  } catch (err) {
    logger.info(err);
  }
  return result;
}

async function getPlayerDataBySearch(searchTerm) {
  let result;
  try {
    const connection = await mysql.createConnection(config);
    result = await connection.execute(query.querySearchPlayer, [searchTerm]);
    await connection.end();
  } catch (error) {
    logger.info(error);
  }
  return result;
}

module.exports.getPlayerDataBySearch = getPlayerDataBySearch;
module.exports.getPlayerStats = getPlayerStats;
module.exports.getPlayerData = getPlayerData;
module.exports.getPlayerById = getPlayerById;
