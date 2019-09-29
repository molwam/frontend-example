import * as ProgramTypes from './Types';
import * as Teams from './Teams';
import * as Leagues from './Leagues';
import * as Countries from './Countries';

const OFFSET = 30 * 60 * 1000;

export const DortmundVSBayern: ProgramTypes.Match = {
    id: 'm1',
    begin: Date.now() - OFFSET,
    homeTeam: Teams.Dortmund,
    awayTeam: Teams.Bayern,
    score: [3, 0],
    league: Leagues.DEU1,
    country: Countries.Germany
};

export const MadridVSBarcelona: ProgramTypes.Match = {
    id: 'm2',
    begin: Date.now() + OFFSET,
    homeTeam: Teams.Madrid,
    awayTeam: Teams.Barcelona,
    league: Leagues.ESP1,
    country: Countries.Spain
};
