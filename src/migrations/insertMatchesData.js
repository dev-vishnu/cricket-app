import { createConnection } from 'mysql2/promise';
import config from '../config/dbConfig';
import { matches } from '../models/matches.json';
import winston from '../common/winston_config';

async function insertMatchData() {
  matches.forEach(async (element) => {
    const query = `insert into matches values(${element.match_id},"${element.teams}","${element.date}","${element.location}","${element.match}","${element.toss}","${element.score}","${element.winner}","${element.mom}")`;
    try {
      const connection = await createConnection(config);
      await connection.execute(query);
      await connection.end();
    } catch (error) {
      winston.info(error);
    }
  });
}
export default { insertMatchData };
