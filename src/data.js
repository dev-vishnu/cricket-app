const playerData = {
  players: [
    {
      id: 0,
      playername: 'MS Dhoni',
      age: 33,
      born: 'July 07,1981',
      birthplace: 'Ranchi',
      role: 'WK-Batsman',
      battingstyle: 'Right Handed Bat',
      bowlingstyle: 'Right-arm medium',
      debut: ['In Tests : vs Sri Lanka at MA Chidambaram Stadium, Dec 02, 2005',
        'In ODIs : vs Bangladesh at MA Aziz Stadium, Dec 23, 2004',
        'In t20s : vs South Africa at The Wanderers Stadium, Dec 01, 2006',
        'In IPLs : vs Kings XI Punjab at Punjab Cricket Association IS Bindra Stadium, Apr 19, 2008'],

    },
    {
      id: 1,
      playername: 'Virat kholi',
      age: 29,
      born: 'November 05,1988',
      birthplace: 'Delhi',
      role: 'Batsman',
      battingstyle: 'Right Handed Bat',
      bowlingstyle: 'Right-arm medium',
      debut: ['In Tests : vs Windies at Sabina Park, Jun 20, 2011',
        'In ODIs : vs Sri Lanka at Rangiri Dambulla International Stadium, Aug 18, 2008',
        'In t20s : vs Zimbabwe at Harare Sports Club, Jun 12, 2010',
        'In IPLs : vs Kolkata Knight Riders at M.Chinnaswamy Stadium, Apr 18, 2008'],

    },
    {
      id: 2,
      playername: 'Ravindra Jadeja',
      age: 29,
      born: 'December 06,1988',
      birthplace: 'Saurashtra',
      role: 'Bowling Allrounder',
      battingstyle: 'Left Handed Bat',
      bowlingstyle: 'Left-arm orthodox',
      debut: ['In Tests : vs England at Vidarbha Cricket Association Stadium, Dec 13, 2012',
        'In ODIs : vs Sri Lanka at R.Premadasa Stadium, Feb 08, 2009',
        'In t20s : vs Sri Lanka at R.Premadasa Stadium, Feb 10, 2009',
        'In IPLs : vs Delhi Daredevils at Feroz Shah Kotla, Apr 19, 2008'],

    },
    {
      id: 3,
      playername: 'Hardik Pandya',
      age: 29,
      born: 'October 11,1993',
      birthplace: 'Gujrat',
      role: 'Bowling Allrounder',
      battingstyle: 'Right Handed Bat',
      bowlingstyle: 'Right-arm fast-medium',
      debut: ['In Tests : vs Sri Lanka at Galle International Stadium, Jul 26, 2017',
        'In ODIs : vs New Zealand at Himachal Pradesh Cricket Association Stadium, Oct 16, 2016',
        'In t20s : vs Australia at Adelaide Oval, Jan 26, 2016',
        'In IPLs : vs Royal Challengers Bangalore at M.Chinnaswamy Stadium, Apr 19, 2015'],

    },
    {
      id: 4,
      playername: 'Suresh Raina',
      age: 31,
      born: 'October 13,1991',
      birthplace: 'Uttar Pradesh',
      role: 'Batting Allrounder',
      battingstyle: 'Left Handed Bat',
      bowlingstyle: 'Right-arm off-break',
      debut: ['In Tests : vs Sri Lanka at Sinhalese Sports Club, Jul 26, 2010',
        'In ODIs : vs Sri Lanka at Rangiri Dambulla International Stadium, Jul 30, 2005',
        'In t20s : vs South Africa at The Wanderers Stadium, Dec 01, 2006',
        'In IPLs : vs Kings XI Punjab at Punjab Cricket Association IS Bindra Stadium, Apr 19, 2008'],

    },
  ],
};
const matchData = {
  matches: [
    {
      match_id: 0,
      teams: 'India vs England',
      date: 'Thu, July 12',
      location: 'TrentBridge, Nottingham',
      match: '1st ODI',
      toss: 'India, Opt to bowl',
      score: 'Eng-268/10 & Ind-269/2',
      winner: 'India',
      mom: 'Kuldeep Yadav',
    },
    {
      match_id: 1,
      teams: 'India vs England',
      date: 'Sat, July 14',
      location: 'Lords, London',
      match: '2nd ODI',
      toss: 'England, Opt to bat',
      score: 'Eng-322/7 & Ind-236/10',
      winner: 'England',
      mom: 'Joe Root',
    },
    {
      match_id: 2,
      teams: 'India vs England',
      date: 'Tue, July 17',
      location: 'Leeds',
      match: '3rd ODI',
      toss: 'India, Opt to Bat',
      score: 'India-350/6 & Eng-256/10',
      winner: 'India',
      mom: 'Virat Kohli',
    },


  ],

};


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
