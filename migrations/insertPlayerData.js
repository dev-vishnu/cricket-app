const mysql = require('mysql2');
const config = require('../migrations/config.js');
const playerData = require('../models/players.json');

function insertPlayerData() {
  playerData.players.forEach(async (element) => {
    const query = `insert into players values(${element.id},"${element.playername}",${element.age},"${element.born}","${element.birthplace}","${element.born}","${element.battingstyle}","${element.bowlingstyle}")`;
    const connection = mysql.createConnection(config);
    await connection.connect();
    await connection.execute(query, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('inserting player data..');
      }
    });
  });
}

module.exports.insertPlayerData = insertPlayerData;
