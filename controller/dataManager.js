const playerData = require('../models/players.json');
const matchData = require('../models/matches.json');

function getPlayerData() {
  return playerData;
}
function getMatchData() {
  return matchData;
}
function getPlayerById(ID) {
  const players = playerData.players.filter(element => element.id === Number(ID));
  return players[0];
}
function getMatchById(ID) {
  const matches = matchData.matches.filter(element => element.match_id === Number(ID));
  return matches[0];
}

module.exports.getPlayerData = getPlayerData;
module.exports.getMatchData = getMatchData;
module.exports.getPlayerById = getPlayerById;
module.exports.getMatchById = getMatchById;
