const data = {
  players: [
    {
      playername: 'MS Dhoni',
      age: 33,
      born: 'July 07,1981',
      birthplace: 'Ranchi',
      role: 'WK-Batsman',
      battingstyle: 'Right Handed Bat',
      bowlingstyle: 'Right-arm medium',
    },
    {
      playername: 'Virat kholi',
      age: 29,
      born: 'November 05,1988',
      birthplace: 'Delhi',
      role: 'Batsman',
      battingstyle: 'Right Handed Bat',
      bowlingstyle: 'Right-arm medium',
    },
    {
      playername: 'Ravindra Jadeja',
      age: 29,
      born: 'December 06,1988',
      birthplace: 'Saurashtra',
      role: 'Bowling Allrounder',
      battingstyle: 'Left Handed Bat',
      bowlingstyle: 'Left-arm orthodox',
    },
    {
      playername: 'Hardik Pandya',
      age: 29,
      born: 'October 11,1993',
      birthplace: 'Gujrat',
      role: 'Bowling Allrounder',
      battingstyle: 'Right Handed Bat',
      bowlingstyle: 'Right-arm fast-medium',
    },
    {
      playername: 'Suresh Raina',
      age: 31,
      born: 'October 13,1991',
      birthplace: 'Uttar Pradesh',
      role: 'Batting Allrounder',
      battingstyle: 'Left Handed Bat',
      bowlingstyle: 'Right-arm off-break',
    },
  ],

};

function getData() {
  return data;
}

module.exports.getData = getData;
