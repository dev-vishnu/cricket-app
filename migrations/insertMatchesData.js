const con = require('../migrations/createConnection');
const matchData = require('../models/matches.json');

function insertMatchData() {
  matchData.matches.forEach(async (element) => {
    const query = `insert into matches values(${element.match_id},"${element.teams}","${element.date}","${element.location}","${element.match}","${element.toss}","${element.score}","${element.winner}","${element.mom}")`;

    await con.connection.connect();
    await con.connection.execute(query, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('inserting match data..');
      }
    });
  });
}

module.exports.insertMatchData = insertMatchData;
