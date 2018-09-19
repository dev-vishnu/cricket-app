
function checkAuth(req, res, next) {
  if (!req.user) {
    res.redirect('/');
  } else {
    next();
  }
}
export default checkAuth;
