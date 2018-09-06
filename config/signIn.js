const mongoClient = require('mongodb').MongoClient;

async function authDB() {
  const db = await mongoClient.connect('mongodb://localhost:27017');
  const dbo = await db.db('authUsers');
  return dbo;
}

module.exports.authDB = authDB;
