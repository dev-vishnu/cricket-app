
import { Router } from 'express';
import config from '../config/dbConfig';
import { getPlayerData, getPlayerById, getPlayerStats } from '../controller/playersController';
import winston from '../common/winston_config';


const players = Router();

players.get('/', async (req, res) => {
  try {
    const playerData = await getPlayerData(config);
    res.render('players', { players: playerData[0] });
  } catch (err) {
    winston.logger.info(err);
  }
});

players.get('/:id', async (req, res) => {
  try {
    const playerID = req.params.id;
    const player = await getPlayerById(playerID, config);
    const playerstats = (await getPlayerStats(player[0][0].pid)).data;
    const bowlingstats = playerstats.data.bowling;
    const battingstats = playerstats.data.batting;
    res.render('playerdetails',
      {
        player: player[0][0], playerstats, bowlingstats, battingstats,
      });
  } catch (err) {
    winston.logger.info(err);
  }
});


export default players;
