const expect = require('chai').expect;

const playerController = require('../controller/playersController.js');


describe('Test For Controllers', () => {
  it('Testing Players Controller for all players', async () => {
    let playerData;
    const expectedValue = [{
      player_id: 0,
      pid: 28081,
      playername: 'MS Dhoni',
      age: 33,
      born: 'July 07,1981',
      birthplace: 'Ranchi',
      role: 'WK-Batsman',
      battingstyle: 'Right Handed Bat',
      bowlingstyle: 'Right-arm medium',
      about: "Barring Sachin Tendulkar, MS Dhoni is arguably the most popular and definitely the most scrutinised cricketer from India. He has done so coming from the cricketing backwaters, the mining state of Jharkhand, and through a home-made batting and wicketkeeping technique, and a style of captaincy that scales the highs and lows of both conservatism and unorthodoxy. Under Dhoni's captaincy, India have won the top prize in all formats: the No.1 Test ranking for 18 months starting December 2009, the 50-over World Cup in 2011 and the World Twenty20 on his captaincy debut in 2007.",
    },
    {
      player_id: 1,
      pid: 253802,
      playername: 'Virat Kholi',
      age: 29,
      born: 'November 05,1988',
      birthplace: 'Delhi',
      role: 'Batsman',
      battingstyle: 'Right Handed Bat',
      bowlingstyle: 'Right-arm medium',
      about: "A typical modern-day cricketer, Virat Kohli plays his game aggressively, bares his emotions loudly in public, yet retains the element of maturity that forms an integral part of every good and great player. Anil Kumble said he had thought hard before calling Kohli the best under-22 player in international cricket - that would rate as perhaps the best compliments he has received. Itis also proof of Kohli's transformation as a player.",
    }];
    try {
      playerData = await playerController.getPlayerData();
    } catch (err) {
      console.log(err);
    }
    expect(expectedValue).deep.equal(playerData[0]);
  });

  it('Testing Players Controller by player_id', async () => {
    let playerData;
    const expectedValue = [
      {
        player_id: 1,
        pid: 253802,
        playername: 'Virat Kholi',
        age: 29,
        born: 'November 05,1988',
        birthplace: 'Delhi',
        role: 'Batsman',
        battingstyle: 'Right Handed Bat',
        bowlingstyle: 'Right-arm medium',
        about: "A typical modern-day cricketer, Virat Kohli plays his game aggressively, bares his emotions loudly in public, yet retains the element of maturity that forms an integral part of every good and great player. Anil Kumble said he had thought hard before calling Kohli the best under-22 player in international cricket - that would rate as perhaps the best compliments he has received. Itis also proof of Kohli's transformation as a player.",
      },
    ];
    try {
      const id = 1;
      playerData = await playerController.getPlayerById(id);
    } catch (err) {
      console.log(err);
    }

    expect(expectedValue).deep.equal(playerData[0]);
  });
});
