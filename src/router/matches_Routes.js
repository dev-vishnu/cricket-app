import { Router } from 'express';
import { getMatchData, getMatchById } from '../controller/matchesController';
import config from '../config/dbConfig';
import winston from '../common/winston_config';

const matches = Router();

matches.get('/', async (req, res) => {
  try {
    const matchData = await getMatchData(config);
    res.render('matches', { matches: matchData[0] });
  } catch (err) {
    winston.logger.info(err);
  }
});

matches.get('/:id', async (req, res) => {
  try {
    const matchID = req.params.id;
    const match = await getMatchById(matchID, config);
    res.render('matchdetails', { match: match[0][0] });
  } catch (err) {
    winston.logger.info(err);
  }
});

export default matches;
