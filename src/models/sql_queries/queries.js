const querySelectAllMatches = 'select * from matches order by match_id asc';
const querySelectMatchByMatchId = 'select matches.*,players.playername from matches left join players on matches.mom = players.player_id where( match_id = ? )';
const querySelectAllPlayers = 'select * from players order by player_id asc';
const querySelectAllPlayerById = 'select*from players where player_id = ?';
const querySearchPlayer = 'select * from players where Match(playername, about, role, birthplace) Against(?)';

export default {
  querySelectAllMatches,
  querySelectMatchByMatchId,
  querySelectAllPlayers,
  querySelectAllPlayerById,
  querySearchPlayer,
};
