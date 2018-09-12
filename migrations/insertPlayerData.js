const mysql = require('mysql2/promise');
const axios = require('axios');

const config = require('../config/dbConfig.js');
const playerData = require('../models/players.json');

async function insertPlayerData() {
  try {
    const connection = await mysql.createConnection(config);
    playerData.players.forEach(async (element) => {
      const apiKey = ('7u62tyv5a8S8BhXI8e3nwpiDUk62');
      console.log(element.pid);
      const result = await axios.get(`https://cricapi.com/api/playerStats?apikey=${apiKey}&pid=${element.pid}`);
      console.log(result.data.profile);
      const query = 'insert into players values(?,?,?,?,?,?,?,?,?,?)';
      try {
        await connection.execute(query,
          [element.id, element.pid, element.playername, element.age, element.born,
            element.birthplace, element.role, element.battingstyle,
            element.bowlingstyle, result.data.profile]);
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports.insertPlayerData = insertPlayerData;
