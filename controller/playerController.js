
const playerModel = require('../models/playerModel.js');


async function getPlayerData() {
  let result;
  try {
    result = await playerModel.findAll({
    });
  } catch (err) {
    console.log(err);
  }
  return (result);
}
async function getPlayerById(playerId) {
  let result;
  try {
    result = await playerModel.findAll({
      where: {
        player_id: playerId,
      },
    });
  } catch (err) {
    console.log(err);
  }
  return result[0];
}
module.exports.getPlayerData = getPlayerData;
module.exports.getPlayerById = getPlayerById;
