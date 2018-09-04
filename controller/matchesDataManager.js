const con = require('../migrations/createConnection');

async function getMatchData(req, res) {
  const query = 'select * from matches';
  await con.connection.connect();
  await con.connection.execute(query, (err, result) => {
    const matchData = { matches: result };
    res.render('matches', matchData);
  });
}

async function getMatchById(ID, req, res) {
  const query = 'select a.*, b.playername from matches a,players b where (a.match_id = ? && a.mom = b.player_id)';

  await con.connection.connect();
  await con.connection.execute(query, [ID], (err, result) => {
    if (err) throw err;
    else {
      res.render('matchdetails', result[0]);
    }
  });
}


module.exports.getMatchData = getMatchData;
module.exports.getMatchById = getMatchById;
