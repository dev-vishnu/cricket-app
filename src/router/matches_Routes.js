import { Router } from 'express';
import { getMatchData, getMatchById } from '../controller/matchesController';
import winston from '../common/winston_config';

const matches = Router();

matches.get('/', async (req, res) => {
  try {
    const matchData = await getMatchData();
    res.render('matches', { matches: matchData });
  } catch (err) {
    winston.logger.info(err);
  }
});

matches.get('/:id', async (req, res) => {
  try {
    const matchId = req.params.id;
    const match = await getMatchById(matchId);
    res.render('matchdetails', { match: match[0] });
  } catch (err) {
    winston.logger.info(err);
  }
});

export default matches;
