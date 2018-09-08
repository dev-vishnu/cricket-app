
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const winston = require('../winston/config.js');


const app = express();
const checkAuth = require('../controller/authentication.js');
const loginSignUp = require('../router/loginSignUp');
const home = require('../router/home.js');
const players = require('../router/players.js');
const matches = require('../router/matches.js');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(morgan('combined', { stream: winston.stream }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'yefaydfcavdfva3210d' }));
app.use(checkAuth);
app.use('/home', home);
app.use('/', loginSignUp);
app.use('/players', players);
app.use('/matches', matches);


app.listen(4000);
