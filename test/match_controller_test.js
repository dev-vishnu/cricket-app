import { expect as expecting } from 'chai';
import winston from '../src/common/winston_config';

import { getMatchData, getMatchById } from '../src/controller/matchesController';

describe('Test For Matches Controllers', () => {
  it('Testing Matches Controller for all matches', async () => {
    let matchData;
    const expectedValue = [{
      match_id: 0,
      teams: 'India vs England',
      date: 'Thu, July 12',
      location: 'TrentBridge, Nottingham',
      matchname: '1st ODI',
      toss: 'India, Opt to bowl',
      score: 'Eng-322/7 & Ind-323/5',
      winner: 'India',
      mom: 2,
    },
    {
      match_id: 1,
      teams: 'India vs England',
      date: 'Thu, July 14',
      location: 'Leeds',
      matchname: '2nd ODI',
      toss: 'India, Opt to bowl',
      score: 'Eng-185/10 & Ind-187/8',
      winner: 'India',
      mom: 1,
    }];
    try {
      matchData = await getMatchData();
    } catch (err) {
      winston.logger.info(`ERROR: mocha testing ${err}`);
    }
    expecting(expectedValue).deep.equal(matchData[0]);
  });

  it('Testing Matches Controller by match_id', async () => {
    let matchData;
    const expectedValue = [
      {
        match_id: 1,
        teams: 'India vs England',
        date: 'Thu, July 14',
        location: 'Leeds',
        matchname: '2nd ODI',
        toss: 'India, Opt to bowl',
        score: 'Eng-185/10 & Ind-187/8',
        winner: 'India',
        mom: 1,
        playername: 'Virat Kholi',
      },
    ];
    try {
      const id = 1;
      matchData = await getMatchById(id);
    } catch (err) {
      winston.logger.info(`ERROR: mocha testing ${err}`);
    }

    expecting(expectedValue).deep.equal(matchData[0]);
  });
});
