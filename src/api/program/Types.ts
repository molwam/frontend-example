export interface Team {
    id: string;
    label: string;
}

export interface Country {
    id: string;
    label: string;
}

export interface League {
    id: string;
    label: string;
}

export interface Match {
    id: string;
    begin: number;
    homeTeam: Team;
    awayTeam: Team;
    score?: [number, number];
    country: Country;
    league: League;
}
