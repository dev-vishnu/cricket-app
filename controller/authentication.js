
const checkAuth = function (req, res, next) {
  if (req.session.user === undefined) {
    req.session.auth = false;
  } else {
    req.session.auth = true;
  }
  next();
};

module.exports = checkAuth;
