const mysql = require('mysql2/promise');
const config = require('../config/dbConfig.js');


async function getPlayerDataBySearch(searchTerm) {
  let result;
  const query = 'select * from players where Match(playername, about, role, birthplace) Against(?)';
  try {
    const connection = await mysql.createConnection(config);
    try {
      result = await connection.execute(query, [searchTerm]);
      await connection.end();
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
  return result;
}

module.exports.getPlayerDataBySearch = getPlayerDataBySearch;
