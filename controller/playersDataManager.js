// const playerData = require('../models/players.json');
// const matchData = require('../models/matches.json');
const playerModel = require('../models/playerModel.js');


async function getPlayerData() {
  const result = await playerModel.findAll({
  });
  return (result);
}
async function getPlayerById(playerId) {
  const result = await playerModel.findAll({
    where: {
      player_id: playerId,
    },
  });
  return result[0];
}
module.exports.getPlayerData = getPlayerData;
module.exports.getPlayerById = getPlayerById;
