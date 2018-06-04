import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header';
import ApiCall from './api_call';


ReactDOM.render(
	<div>
	<Header value='Hello, World!'/>
	<ApiCall/>
	</div>,
    document.getElementById('root')
)
