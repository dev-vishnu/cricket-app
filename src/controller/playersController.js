import axios from 'axios';
import winston from '../common/winston_config';

async function getPlayerData() {
  let result;
  try {
    result = await axios.get('http://13.126.108.220:9000/playerdata');
  } catch (error) {
    winston.logger.info(error);
  }
  return result.data;
}


async function getPlayerById(id) {
  let result;
  try {
    result = await axios.get(`http://13.126.108.220:9000/playerdata/${id}`);
  } catch (err) {
    winston.logger.info(err);
  }
  return result.data;
}

async function getPlayerStats(pid) {
  const apiKey = '7u62tyv5a8S8BhXI8e3nwpiDUk62';
  let result;
  try {
    result = await axios.get(`https://cricapi.com/api/playerStats?apikey=${apiKey}&pid=${pid}`);
  } catch (err) {
    winston.logger.info(err);
  }
  return result.data;
}

// async function getPlayerDataBySearch(searchTerm) {
//   let result;
//   try {
//     /* request to data server */
//   } catch (error) {
//     winston.logger.info(error);
//     return false;
//   }
//   return result;
// }

export {
  getPlayerStats, getPlayerData, getPlayerById,
};
