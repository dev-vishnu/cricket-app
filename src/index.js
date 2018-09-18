
const express = require('express');
const session = require('express-session');
const appRoot = require('app-root-path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const winston = require('./common/winston_config.js');


const app = express();
const auth = require('./router/auth_Routes.js');
const home = require('./router/home_Routes.js');
const players = require('./router/players_Routes.js');
const matches = require('./router/matches_Routes.js');
const search = require('./router/search_Routes.js');
const checkAuth = require('./common/routes_middleware.js');
const passportConfig = require('./common/passport_strategy.js');

app.set('view engine', 'ejs');
app.set('views', `${appRoot}/src/views`);

app.use(express.static('public'));
app.use(morgan('combined', { stream: winston.stream }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'yefaydfcavdfva3210d' }));
passportConfig(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', auth);
app.use('/search', checkAuth, search);
app.use('/home', checkAuth, home);
app.use('/players', checkAuth, players);
app.use('/matches', checkAuth, matches);

module.exports = app;

app.listen(4000);
