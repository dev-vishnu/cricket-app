const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'webapp',
});

con.connect((err) => {
  if (err)console.log(err);
  console.log('Connected!');
});

con.query('select*from players', (err, rows) => {
  if (err) {
    console.log(err);
  } else {
    console.log(rows);
  }
});
