
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

function getMatchData() {
  let matchData = {};
  const promise1 = new Promise((resolve, reject) => {
    connection.query('select*from matches', (err, rows) => {
      if (err) {
        reject();
      } else {
        matchData = { matches: rows };
        resolve(matchData);
      }
    });
  });
  return promise1;
}

function getMatchById(ID) {
  const promise = new Promise((resolve, reject) => {
    connection.query('select*from matches where match_id = ?', [ID], (err, rows) => {
      if (err) {
        reject();
      } else {
        resolve(rows[0]);
      }
    });
  });
  return promise;
}


module.exports.getMatchData = getMatchData;
module.exports.getMatchById = getMatchById;
// module.exports.getManOfMatchByMatchId = getManOfMatchByMatchId;
