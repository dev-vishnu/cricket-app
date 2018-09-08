const mongoClient = require('mongodb').MongoClient;

async function authDB() {
  try {
    const db = await mongoClient.connect('mongodb://localhost:27017');
    const dbo = await db.db('authUsers');
    return dbo;
  } catch (err) {
    console.log(err);
    return err;
  }
}

module.exports.authDB = authDB;
