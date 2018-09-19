import { createConnection } from 'mysql2/promise';
import winston from '../common/winston_config';

const query = 'create database if not exists cricDb';

async function createDB() {
  try {
    const connection = await createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
    });
    await connection.connect();
    await connection.execute(query);
  } catch (error) {
    winston.logger.info(error);
  }
}
createDB();
