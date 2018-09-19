import { createConnection } from 'mysql2/promise';
import config from '../config/dbConfig';

import insertPlayerData from './insertPlayerData';
import insertMatchData from './insertMatchesData';
import winston from '../common/winston_config';

const query1 = 'create table players (player_id int,pid int,playername varchar(255),age int,born varchar(255),birthplace varchar(255),role varchar(255),battingstyle varchar(255),bowlingstyle varchar(255),about text)';

const query2 = 'create table matches (match_id int,teams varchar(255),date varchar(255),location varchar(255),matchname varchar(255),toss varchar(255),score varchar(255),winner varchar(255),mom int)';

async function createTables() {
  const connection = await createConnection(config);
  try {
    await connection.execute(query1);
    await insertPlayerData();
  } catch (err) {
    winston.logger.info(err);
  }
  try {
    await connection.execute(query2);
    await insertMatchData();
  } catch (err) {
    winston.logger.info(err);
  }
}

export default { createTables };
