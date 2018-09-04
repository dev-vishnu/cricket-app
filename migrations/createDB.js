const con = require('./createConnection');

const query = 'create database cricDb';

async function createDB() {
  await con.connection.connect();

  await con.connection.execute(query, (err) => {
    if (err) {
      console.log('DB already exists');
    } else {
      console.log('creating database');
    }
  });
}

module.exports.createDB = createDB;
