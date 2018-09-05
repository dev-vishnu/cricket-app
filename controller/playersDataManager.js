// const playerData = require('../models/players.json');
// const matchData = require('../models/matches.json');
const mysql = require('mysql2');
const config = require('../migrations/config.js');


const connection = mysql.createConnection(config);

async function getPlayerData(req, res) {
  const query = 'select * from players';
  const resu = await connection.execute(query, (err, result) => {
    if (err) throw (err);
    else {
      console.log(result);
      const playerData = { players: result };
      res.render('players', playerData);
    }
  });
  console.log(resu);
}


async function getPlayerById(ID, req, res) {
  const query = 'select*from players where player_id = ?';
  await connection.execute(query, [ID], (err, result) => {
    if (err) throw (err);
    else {
      res.render('playerdetails', result[0]);
    }
  });
}

module.exports.getPlayerData = getPlayerData;
module.exports.getPlayerById = getPlayerById;
