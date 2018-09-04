// const playerData = require('../models/players.json');
// const matchData = require('../models/matches.json');
const con = require('../migrations/createConnection');

async function getPlayerData(req, res) {
  const query = 'select * from players';
  await con.connection.connect();
  await con.connection.execute(query, (err, result) => {
    if (err) throw (err);
    else {
      const playerData = { players: result };
      res.render('players', playerData);
    }
  });
}


async function getPlayerById(ID, req, res) {
  const query = 'select*from players where player_id = ?';
  await con.connection.connect();
  await con.connection.execute(query, [ID], (err, result) => {
    if (err) throw (err);
    else {
      res.render('playerdetails', result[0]);
    }
  });
}

module.exports.getPlayerData = getPlayerData;
module.exports.getPlayerById = getPlayerById;
