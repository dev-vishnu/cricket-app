const Sequelize = require('sequelize');

const connection = new Sequelize('cricket_DB', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = connection;
