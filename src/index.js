
import express, { static as _static } from 'express';
import session from 'express-session';
import appRoot from 'app-root-path';
import morgan from 'morgan';
import { urlencoded, json } from 'body-parser';
import passport from 'passport';
import winston from './common/winston_config';


import auth from './router/auth_Routes';
import home from './router/home_Routes';
import players from './router/players_Routes';
import matches from './router/matches_Routes';
import search from './router/search_Routes';
import checkAuth from './common/routes_middleware';
import passportConfig from './common/passport_strategy';

const app = express();
app.set('views', `${appRoot}/src/views`);
app.set('view engine', 'ejs');

app.use(_static('public'));

app.use(morgan('combined', { stream: winston.logger.stream }));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(session({ secret: 'yefaydfcavdfva3210d' }));
passportConfig(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', auth);
app.use('/search', checkAuth, search);
app.use('/home', checkAuth, home);
app.use('/players', checkAuth, players);
app.use('/matches', checkAuth, matches);

export default app;

app.listen(4000);
