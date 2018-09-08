const bcrypt = require('bcrypt');
const authDB = require('../config/authDB.js');


async function registerUser(userdetails) {
  try {
    const user = userdetails;
    const dbo = await authDB.authDB();
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    const result = await dbo.collection('users').insertOne(user);
    return result;
  } catch (err) {
    return 0;
  }
}

module.exports.registerUser = registerUser;
