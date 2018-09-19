import { createConnection } from 'mysql2/promise';
import config from '../config/dbConfig';
import query from '../models/sql_queries/queries';
import winston from '../common/winston_config';

async function getMatchData() {
  let result;
  try {
    const connection = await createConnection(config);
    result = await connection.execute(query.querySelectAllMatches);
    connection.end();
  } catch (err) {
    winston.logger.info(err);
  }

  return result;
}

async function getMatchById(id) {
  let result;
  try {
    const connection = await createConnection(config);
    result = await connection.execute(query.querySelectMatchByMatchId, [id]);
    connection.end();
  } catch (err) {
    winston.logger.info(err);
  }

  return result;
}

export { getMatchData };
export { getMatchById };
