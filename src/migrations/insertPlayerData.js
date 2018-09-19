import { createConnection } from 'mysql2/promise';
import { get } from 'axios';

import config from '../config/dbConfig';
import { players } from '../models/players.json';
import winston from '../common/winston_config';

async function insertPlayerData() {
  try {
    const connection = await createConnection(config);
    players.forEach(async (element) => {
      const apiKey = ('7u62tyv5a8S8BhXI8e3nwpiDUk62');
      const result = await get(`https://cricapi.com/api/playerStats?apikey=${apiKey}&pid=${element.pid}`);
      const query = 'insert into players values(?,?,?,?,?,?,?,?,?,?)';

      await connection.execute(query,
        [element.id, element.pid, element.playername, element.age, element.born,
          element.birthplace, element.role, element.battingstyle,
          element.bowlingstyle, result.data.profile]);
      await connection.end();
    });
  } catch (error) {
    winston.logger.info(error);
  }
}

export default { insertPlayerData };
