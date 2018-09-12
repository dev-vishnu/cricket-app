const mysql = require('mysql2/promise');

async function getPlayerData(config) {
  let result;
  const query = 'select * from players order by player_id asc';
  try {
    const connection = await mysql.createConnection(config);
    try {
      result = await connection.execute(query);
      await connection.end();
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
  return result;
}


async function getPlayerById(id, config) {
  const query = 'select*from players where player_id = ?';
  let result;
  try {
    const connection = await mysql.createConnection(config);
    try {
      result = await connection.execute(query, [id]);
      await connection.end();
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
