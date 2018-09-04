const con = require('./createConnection');
const playerData = require('./insertPlayerData');
const matchData = require('./insertMatchesData');

const query1 = 'create table players (player_id int,playername varchar(255),age int,born varchar(255),birthplace varchar(255),role varchar(255),battingstyle varchar(255),bowlingstyle varchar(255))';

const query2 = 'create table matches (match_id int,teams varchar(255),date varchar(255),location varchar(255),matchname varchar(255),toss varchar(255),score varchar(255),winner varchar(255),mom int)';

async function createTables() {
  await con.connection.connect();
  await con.connection.execute(query1, (err) => {
    if (err) {
      console.log('table already exist');
    } else {
      console.log('table created');
      playerData.insertPlayerData();
    }
  });
  await con.connection.execute(query2, (err) => {
    if (err) {
      console.log('table already exist');
    } else {
      console.log('table created');
      matchData.insertMatchData();
    }
  });
}

module.exports.createTables = createTables;
