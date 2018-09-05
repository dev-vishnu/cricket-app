const matchModel = require('../models/matchModel.js');
const playerModel = require('../models/playerModel.js');

async function getMatchData() {
  let result;
  try {
    result = await matchModel.findAll({
    });
  } catch (err) {
    console.log(err);
  }
  return (result);
}


async function getMatchById(matchId) {
  let match;
  let result;
  try {
    match = await matchModel.findAll({
      where: {
        match_id: matchId,
      },
    });
    result = await matchModel.findAll({
      include: [{
        model: playerModel,
        where: {
          player_id: match[0].playerPlayerId,
        },
      }],
    });
  } catch (err) {
    console.log(err);
  }

  return result[0];
}


module.exports.getMatchData = getMatchData;
module.exports.getMatchById = getMatchById;
