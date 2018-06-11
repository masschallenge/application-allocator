import React from 'react'

class JudgingRoundSelector extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    error: null,
	    isLoaded: false,
	    user: []
	};
    }

    componentDidMount() {
	fetch("http://localhost:8000/api/v1/judging_round/?is_active=True",
	      {credentials: "include", mode: "cors"})
	    .then(res => res.json())
	    .then(
		(result) => {
		    this.setState({
			isLoaded: true,
			results: result['results'],
		    });
		},
		// Note: it's important to handle errors here
		// instead of a catch() block so that we don't swallow
		// exceptions from actual bugs in components.
		(error) => {
		    this.setState({
			isLoaded: true,
			error
		    });
		}
	    )
	// this.setState({isLoaded: true,
	// items: [{name: 'bar', price: 1.00}]})
    }

    render() {
	const { error, isLoaded, results } = this.state;
	if (error) {
	    return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
	    return <div>Loading...</div>;
	} else {
	    return (<ul>
		    {results.map(result => (
			<li key={result.id}>
			    {result.full_name}
			</li>))}
		    </ul>);
	}
    }
}

export default JudgingRoundSelector;
