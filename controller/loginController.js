
const authDB = require('../config/authDB.js');

async function findUserByUsername(username) {
  const dbo = await authDB.authDB();
  const query = { username };
  const result = await dbo.collection('users').find(query).toArray();
  if (result.length === 0) {
    return false;
  }
  return result[0];
}

module.exports.findUserByUsername = findUserByUsername;
