const mysql = require('mysql2/promise');
const logger = require('../winston/config.js');

const query = 'create database if not exists cricDb';

async function createDB() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
    });
    await connection.connect();
    await connection.execute(query);
  } catch (error) {
    logger.info(error);
  }
}
createDB();
