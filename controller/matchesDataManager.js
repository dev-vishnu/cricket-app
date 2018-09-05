const mysql = require('mysql2');
const config = require('../migrations/config');

async function getMatchData(req, res) {
  const connection = mysql.createConnection(config);
  const query = 'select * from matches';
  await connection.execute(query, (err, result) => {
    const matchData = { matches: result };
    res.render('matches', matchData);
  });
}

async function getMatchById(ID, req, res) {
  // const query = 'select a.*, b.playername from matches a,
  // players b where (a.match_id = ? && a.mom = b.player_id)';
  const query = 'select matches.*,players.playername from matches left join players on matches.mom = players.player_id where( match_id = ? )';
  const connection = mysql.createConnection(config);
  await connection.connect();
  await connection.execute(query, [ID], (err, result) => {
    if (err) throw err;
    else {
      res.render('matchdetails', result[0]);
    }
  });
}


module.exports.getMatchData = getMatchData;
module.exports.getMatchById = getMatchById;
