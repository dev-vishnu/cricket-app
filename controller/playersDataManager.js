// const playerData = require('../models/players.json');
// const matchData = require('../models/matches.json');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'webapp',
});
connection.connect((err) => {
  if (err)console.log(err);
  console.log('Connected!');
});

function getPlayerData() {
  const promise = new Promise((resolve, reject) => {
    connection.query('select*from players', (err, rows) => {
      if (err) {
        reject();
      } else {
        const playerData = { players: rows };
        resolve(playerData);
      }
    });
  });

  return promise;
}

function getPlayerById(ID) {
  const promise = new Promise((resolve, reject) => {
    connection.query('select * from players where player_id = ?', [ID], (err, rows) => {
      if (err) {
        reject();
      } else {
        resolve(rows[0]);
      }
    });
  });
  return promise;
}

module.exports.getPlayerData = getPlayerData;
module.exports.getPlayerById = getPlayerById;
