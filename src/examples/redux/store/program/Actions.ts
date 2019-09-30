import {ADD_MATCH, ProgramThunkActionTypes, ProgramActionTypes} from './Types';
import * as ProgramTypes from '../../../../api/program/Types';
import * as ProgramAPI from '../../../../api/program/API';

let timer: number;

export function addMatch(match: ProgramTypes.Match): ProgramActionTypes {
    return {
        type: ADD_MATCH,
        match
    };
}

export const getMatches = (): ProgramThunkActionTypes => {
    return async dispatch => {
        const matches = await ProgramAPI.getMatches();

        matches.forEach(match => {
            dispatch(addMatch(match));
        });
    };
};

export const startAutoFetch = (): ProgramThunkActionTypes => {
    return dispatch => {
        clearInterval(timer);
        dispatch(getMatches());
        timer = setInterval(() => dispatch(getMatches()), 60000);
    };
};

export const stopAutoFetch = () => {
    clearInterval(timer);
};
