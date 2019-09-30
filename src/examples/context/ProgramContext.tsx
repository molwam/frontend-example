import * as React from 'react';
import * as ProgramTypes from '../../api/program/Types';

export interface ProgramState {
    matches: ProgramTypes.Match[];
    getMatches: () => void;
    startAutoFetch: () => void;
    stopAutoFetch: () => void;
}

export const ProgramDefaultState: ProgramState = {
    matches: [],
    getMatches: () => {},
    startAutoFetch: () => {},
    stopAutoFetch: () => {}
};
export const ProgramContext = React.createContext<ProgramState>(ProgramDefaultState);
