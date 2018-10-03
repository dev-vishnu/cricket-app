import { Router } from 'express';
// import { getPlayerDataBySearch } from '../controller/playersController';
// import winston from '../common/winston_config';

const search = Router();

// search.get('/', async (req, res) => {
//   try {
//     const searchTerm = req.query;
//     // const playerData = await getPlayerDataBySearch(searchTerm.search);
//     res.render('players', { players: playerData[0] });
//   } catch (err) {
//     winston.logger.info(err);
//   }
// });

export default search;
