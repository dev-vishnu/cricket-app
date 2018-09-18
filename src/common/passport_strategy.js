const LocalStrategy = require('passport-local').Strategy;
const axios = require('axios');
const logger = require('./winston_config.js');


function passportConfig(passport) {
  passport.use(new LocalStrategy(
    (async (username, password, done) => {
      try {
        const result = await axios.post('http://localhost:3000/login', { username, password });
        if (!(result.data)) {
          return done(null, false);
        }
        return done(null, result.data);
      } catch (err) {
        return done(err, false);
      }
    }),
  ));

  passport.serializeUser((user, done) => {
    if (!user) {
      done(null, false);
    }
    logger.info(`${user.username} logged in`);
    done(null, user.username);
  });

  passport.deserializeUser(async (username, done) => {
    if (!username) {
      done(null, false);
    } else {
      try {
        done(null, username);
      } catch (err) {
        logger.info(err);
        done(err, username);
      }
    }
  });
}

module.exports = passportConfig;
