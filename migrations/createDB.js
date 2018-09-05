const mysql = require('mysql2');
const config = require('./config.js');


const query = 'create database if not exists cricDb';

async function createDB() {
  const connection = mysql.createConnection(config);
  await connection.connect();
  await connection.execute(query, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('creating database');
    }
  });
}

module.exports.createDB = createDB;
