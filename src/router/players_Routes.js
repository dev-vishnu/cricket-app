
import { Router } from 'express';
import { getPlayerData, getPlayerById, getPlayerStats } from '../controller/playersController';
import winston from '../common/winston_config';


const players = Router();

players.get('/', async (req, res) => {
  try {
    const playerData = await getPlayerData();
    res.render('players', { players: playerData });
  } catch (err) {
    winston.logger.info(err);
  }
});

players.get('/:id', async (req, res) => {
  try {
    const playerID = req.params.id;
    const player = await getPlayerById(playerID);
    const playerstats = (await getPlayerStats(player[0].cricapi_pid));
    const bowlingstats = playerstats.data.bowling;
    const battingstats = playerstats.data.batting;
    res.render('playerdetails',
      {
        player: player[0], playerstats, bowlingstats, battingstats,
      });
  } catch (err) {
    winston.logger.info(err);
  }
});


export default players;
