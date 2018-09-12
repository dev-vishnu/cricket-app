const axios = require('axios');

async function getPlayerStats(pid) {
  console.log(pid);
  const apiKey = ('7u62tyv5a8S8BhXI8e3nwpiDUk62');
  let result;
  try {
    result = await axios.get(`https://cricapi.com/api/playerStats?apikey=${apiKey}&pid=${pid}`);
  } catch (err) {
    console.log(err);
  }
  return result;
}

module.exports.getPlayerStats = getPlayerStats;
