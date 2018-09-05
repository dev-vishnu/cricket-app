const mysql = require('mysql2/promise');
const config = require('../config/config');

async function getMatchData() {
  const connection = await mysql.createConnection(config);
  const query = 'select * from matches';
  const result = await connection.execute(query);
  return result;
}

async function getMatchById(id) {
  // const query = 'select a.*, b.playername from matches a,
  // players b where (a.match_id = ? && a.mom = b.player_id)';
  const query = 'select matches.*,players.playername from matches left join players on matches.mom = players.player_id where( match_id = ? )';
  const connection = await mysql.createConnection(config);
  const result = await connection.execute(query, [id]);
  return result;
}


module.exports.getMatchData = getMatchData;
module.exports.getMatchById = getMatchById;
