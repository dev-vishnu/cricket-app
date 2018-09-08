const jwt = require('jsonwebtoken');

const checkAuth = async function (req, res, next) {
  if (req.cookies.access_token === undefined) {
    req.body = { auth: false };
  } else {
    try {
      await jwt.verify(req.cookies.access_token, 'hooooola');
      req.body = { auth: true };
    } catch (err) {
      req.body = { auth: false };
    }
  }
  next();
};

module.exports = checkAuth;
