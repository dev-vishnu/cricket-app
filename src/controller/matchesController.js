import axios from 'axios';
import winston from '../common/winston_config';

async function getMatchData() {
  let result;
  try {
    /* request to data server */
    result = await axios.get('http://52.66.211.82:9000/matchdata');
  } catch (err) {
    winston.logger.info(err);
  }

  return result.data;
}

async function getMatchById(id) {
  let result;
  try {
    /* request to data server */
    result = await axios.get(`http://52.66.211.82:9000/matchdata/${id}`);
  } catch (err) {
    winston.logger.info(err);
  }

  return result.data;
}

export { getMatchData };
export { getMatchById };
