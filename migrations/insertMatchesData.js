const mysql = require('mysql2/promise');
const config = require('../config/dbConfig.js');
const matchData = require('../models/matches.json');

async function insertMatchData() {
  matchData.matches.forEach(async (element) => {
    const query = `insert into matches values(${element.match_id},"${element.teams}","${element.date}","${element.location}","${element.match}","${element.toss}","${element.score}","${element.winner}","${element.mom}")`;
    try {
      const connection = await mysql.createConnection(config);
      await connection.execute(query);
    } catch (error) {
      console.log(error);
    }
  });
}
module.exports.insertMatchData = insertMatchData;
