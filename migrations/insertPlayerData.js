const mysql = require('mysql2/promise');
const config = require('../config/dbConfig.js');
const playerData = require('../models/players.json');

async function insertPlayerData() {
  try {
    const connection = await mysql.createConnection(config);
    playerData.players.forEach(async (element) => {
      const query = `insert into players values(${element.id},"${element.playername}",${element.age},"${element.born}","${element.birthplace}","${element.born}","${element.battingstyle}","${element.bowlingstyle}")`;
      try {
        await connection.execute(query);
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports.insertPlayerData = insertPlayerData;
