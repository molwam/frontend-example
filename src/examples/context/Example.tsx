import React from 'react';
import {MatchListWithConsumer, MatchListWithHooks} from './components/MatchList';
import {ProgramContext, ProgramState, ProgramDefaultState} from './ProgramContext';
import * as ProgramAPI from '../../api/program/API';

interface Props {}

type State = ProgramState & {
    useHooks: boolean;
    timer: number;
};

class App extends React.Component<Props, State> {
    state = {
        ...ProgramDefaultState,
        useHooks: false,
        timer: 0
    };

    private getMatches = async () => {
        const matches = await ProgramAPI.getMatches();

        this.setState({
            matches
        });
    };

    private toggleUseHooks = () => {
        this.setState(prevState => ({
            useHooks: !prevState.useHooks
        }));
    };
    private startAutoFetch = () => {
        this.stopAutoFetch();
        this.getMatches();
        let new_timer = setInterval(() => this.getMatches(), 60000);
        this.setState({
            timer: new_timer
        });
    };

    private stopAutoFetch = () => {
        clearInterval(this.state.timer);
        this.setState({
            timer: 0
        });
    };

    public render() {
        return (
            <ProgramContext.Provider
                value={{
                    matches: this.state.matches,
                    getMatches: this.getMatches,
                    startAutoFetch: this.startAutoFetch,
                    stopAutoFetch: this.stopAutoFetch
                }}>
                <button onClick={this.toggleUseHooks}>Toggle Consumer/Hooks</button>
                {this.state.useHooks ? <MatchListWithHooks /> : <MatchListWithConsumer />}
            </ProgramContext.Provider>
        );
    }
}

export default App;
