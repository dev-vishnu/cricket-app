const matchModel = require('../models/matchModel.js');


async function getMatchData() {
  const result = await matchModel.findAll({
  });
  return (result);
}
async function getMatchById(matchId) {
  const result = await matchModel.findAll({
    where: {
      match_id: matchId,
    },
  });
  return result[0];
}


module.exports.getMatchData = getMatchData;
module.exports.getMatchById = getMatchById;
