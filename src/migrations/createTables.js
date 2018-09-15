const mysql = require('mysql2/promise');
const config = require('../config/dbConfig.js');

const playerData = require('./insertPlayerData');
const matchData = require('./insertMatchesData');
const logger = require('../common/winston_config.js');

const query1 = 'create table players (player_id int,pid int,playername varchar(255),age int,born varchar(255),birthplace varchar(255),role varchar(255),battingstyle varchar(255),bowlingstyle varchar(255),about text)';

const query2 = 'create table matches (match_id int,teams varchar(255),date varchar(255),location varchar(255),matchname varchar(255),toss varchar(255),score varchar(255),winner varchar(255),mom int)';

async function createTables() {
  const connection = await mysql.createConnection(config);
  try {
    await connection.execute(query1);
    await playerData.insertPlayerData();
  } catch (err) {
    logger.info(err);
  }
  try {
    await connection.execute(query2);
    await matchData.insertMatchData();
  } catch (err) {
    logger.info(err);
  }
}

module.exports.createTables = createTables;
