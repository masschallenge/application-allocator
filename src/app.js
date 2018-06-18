import React from 'react'
import Header from './header';

import JudgingRoundDisplay from './judging_round_display';
import JudgingRoundSelector from './judging_round_selector';


class App extends React.Component {
    state = { judging_round: null }

    select_judging_round = (_, data) => {
	this.setState({judging_round: data.value})
    }

    render() {
	return (<div>
		<Header value='Application Allocator Setup'/>
		<JudgingRoundSelector on_select={this.select_judging_round}/>
		<JudgingRoundDisplay judging_round={this.state.judging_round}/>
		</div>);
    }
}

export default App;
