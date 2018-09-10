const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const loginUser = require('../controller/loginController.js');


function passportConfig(passport) {
  console.log('in config');
  passport.use(new LocalStrategy(
    (async (username, password, done) => {
      console.log(username);
      try {
        const result = await loginUser.findUserByUsername(username);
        if (!result) {
          done(null, false);
        }
        const hash = result.password;
        const isMatch = await bcrypt.compare(password, hash);
        if (isMatch) {
          return done(null, result);
        }
        return done(null, false);
      } catch (err) {
        return done(err, false);
      }
    }),
  ));

  passport.serializeUser((user, done) => {
    if (!user) {
      done(null, false);
    }
    console.log(user.username);
    done(null, user.username);
  });

  passport.deserializeUser(async (username, done) => {
    if (!username) {
      done(null, false);
    } else {
      let result;
      try {
        result = loginUser.findUserByUsername(username);
        done(null, result);
      } catch (err) {
        console.log(err);
        done(err, result);
      }
    }
  });
}

module.exports = passportConfig;
