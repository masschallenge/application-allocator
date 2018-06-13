import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header';
import JudgingRoundSelector from './judging_round_selector';


ReactDOM.render(
	<div>
	  <Header value='Application Allocator Setup'/>
	  <JudgingRoundSelector/>
	</div>,
        document.getElementById('root')
)
