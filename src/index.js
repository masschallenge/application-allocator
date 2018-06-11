import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header';
import JudgingRoundSelector from './judging_round_selector';


ReactDOM.render(
	<div>
	<Header value='Hello, World!'/>
	<JudgingRoundSelector/>
	</div>,
    document.getElementById('root')
)
