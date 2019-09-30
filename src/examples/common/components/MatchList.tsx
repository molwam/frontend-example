import React from 'react';
import * as ProgramTypes from '../../../api/program/Types';
import Match from '../../common/components/Match';
import styled from 'styled-components';

const Container = styled.div``;

const NoMatches = styled.div``;

interface Props {
    matches: ProgramTypes.Match[];
    getMatches: () => void;
    startAutoFetch: () => void;
    stopAutoFetch: () => void;
}

class MatchList extends React.Component<Props> {
    componentDidMount() {
        this.props.startAutoFetch();
    }

    componentWillUnmount() {
        this.props.stopAutoFetch();
    }

    render() {
        return (
            <Container>
                {this.props.matches.length === 0 ? (
                    <NoMatches>No matches available</NoMatches>
                ) : (
                    this.props.matches.map((match: ProgramTypes.Match) => <Match key={match.id} match={match} />)
                )}

                <button onClick={this.props.getMatches}>Get/Update Matches</button>
            </Container>
        );
    }
}

export default MatchList;
