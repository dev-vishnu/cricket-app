import { createConnection } from 'mysql2/promise';
import { get } from 'axios';
import config from '../config/dbConfig';
import query from '../models/sql_queries/queries';
import winston from '../common/winston_config';

async function getPlayerData() {
  let result;
  try {
    const connection = await createConnection(config);
    result = await connection.execute(query.querySelectAllPlayers);
    await connection.end();
  } catch (error) {
    winston.logger.info(error);
  }
  return result;
}


async function getPlayerById(id) {
  let result;
  try {
    const connection = await createConnection(config);
    result = await connection.execute(query.querySelectAllPlayerById, [id]);
    await connection.end();
  } catch (err) {
    winston.logger.info(err);
  }
  return result;
}

async function getPlayerStats(pid) {
  const apiKey = ('7u62tyv5a8S8BhXI8e3nwpiDUk62');
  let result;
  try {
    result = await get(`https://cricapi.com/api/playerStats?apikey=${apiKey}&pid=${pid}`);
  } catch (err) {
    winston.logger.info(err);
  }
  return result;
}

async function getPlayerDataBySearch(searchTerm) {
  let result;
  try {
    const connection = await createConnection(config);
    result = await connection.execute(query.querySearchPlayer, [searchTerm]);
    await connection.end();
  } catch (error) {
    winston.logger.info(error);
    return false;
  }
  return result;
}

export {
  getPlayerDataBySearch, getPlayerStats, getPlayerData, getPlayerById,
};
