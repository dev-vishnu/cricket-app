const mysql = require('mysql2/promise');
const config = require('../config/dbConfig.js');
const query = require('../models/sql_queries/queries.js');
const logger = require('../winston/config.js');

async function getMatchData() {
  let result;
  try {
    const connection = await mysql.createConnection(config);
    result = await connection.execute(query.querySelectAllMatches);
    connection.end();
  } catch (err) {
    logger.log(err);
  }

  return result;
}

async function getMatchById(id) {
  let result;
  try {
    const connection = await mysql.createConnection(config);
    result = await connection.execute(query.querySelectMatchByMatchId, [id]);
    connection.end();
  } catch (err) {
    logger.info(err);
  }

  return result;
}


module.exports.getMatchData = getMatchData;
module.exports.getMatchById = getMatchById;
