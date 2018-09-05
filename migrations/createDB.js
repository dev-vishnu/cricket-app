const mysql = require('mysql2/promise');
// const config = require('./config.js');


const query = 'create database if not exists cricDb';

async function createDB() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
    });
    try {
      await connection.connect();
      await connection.execute(query);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}
createDB();
