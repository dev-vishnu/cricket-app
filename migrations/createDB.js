const con = require('./createConnection');

const query = 'create database cricDb';

async function createDB() {
  await con.connection.connect();

  await con.connection.execute(query, (err, rows) => {
    if (err) {
      console.log('DB already exists');
    } else {
      console.log('creating database');
      console.log(rows);
    }
  });
}

module.exports.createDB = createDB;
