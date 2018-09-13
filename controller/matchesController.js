const mysql = require('mysql2/promise');
const config = require('../config/dbConfig.js');

async function getMatchData() {
  let result;
  try {
    const connection = await mysql.createConnection(config);
    const query = 'select * from matches order by match_id asc';
    result = await connection.execute(query);
    connection.end();
  } catch (err) {
    console.log(err);
  }

  return result;
}

async function getMatchById(id) {
  let result;
  try {
    const query = 'select matches.*,players.playername from matches left join players on matches.mom = players.player_id where( match_id = ? )';
    const connection = await mysql.createConnection(config);
    result = await connection.execute(query, [id]);
    connection.end();
  } catch (err) {
    console.log(err);
  }

  return result;
}


module.exports.getMatchData = getMatchData;
module.exports.getMatchById = getMatchById;
