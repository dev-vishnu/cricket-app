const bcrypt = require('bcrypt');
const authDB = require('../config/authDB.js');

async function loginUser(userdetails) {
  try {
    const user = userdetails;
    const query = { email: `${user.email}` };
    const dbo = await authDB.authDB();
    const result = await dbo.collection('users').find(query).toArray();
    if (result.length !== 0) {
      const hash = result[0].password;
      const auth = await bcrypt.compare(user.password, hash);
      return auth;
    }
    return false;
  } catch (err) {
    return false;
  }
}

module.exports.loginUser = loginUser;
