import React from 'react'
import Header from './header';

import JudgingRoundSelector from './judging_round_selector';


class App extends React.Component {
    render() {
	return (<div>
		<Header value='Application Allocator Setup'/>
		<JudgingRoundSelector />
		</div>);
    }
}

export default App;
