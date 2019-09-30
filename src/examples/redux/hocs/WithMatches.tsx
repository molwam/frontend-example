import {connect} from 'react-redux';
import {AppState} from '../store';
import * as ProgramTypes from '../../../api/program/Types';
import {ProgramActionTypes} from '../store/program/Types';
import {addMatch, getMatches, startAutoFetch, stopAutoFetch} from '../store/program/Actions';
import {ThunkDispatch} from 'redux-thunk';

export interface OwnProps {}

interface StateProps {
    matches: ProgramTypes.Match[];
}

interface DispatchProps {
    addMatch: (match: ProgramTypes.Match) => void;
    getMatches: () => void;
    startAutoFetch: () => void;
    stopAutoFetch: () => void;
}

export type InjectedProps = StateProps & DispatchProps;

export default connect<StateProps, DispatchProps, OwnProps, AppState>(
    (state: AppState, ownProps: OwnProps): StateProps => {
        return {
            matches: state.program.matches
        };
    },
    (dispatch: ThunkDispatch<AppState, undefined, ProgramActionTypes>, ownProps: OwnProps): DispatchProps => {
        return {
            addMatch: (match: ProgramTypes.Match) => {
                dispatch(addMatch(match));
            },
            getMatches: () => {
                dispatch(getMatches());
            },
            startAutoFetch: () => {
                dispatch(startAutoFetch());
            },
            stopAutoFetch: () => {
                stopAutoFetch();
            }
        };
    }
);
