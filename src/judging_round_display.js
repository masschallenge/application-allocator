import React from 'react'
import judgingRoundUrl from './utils'


const fetchJudgingRoundData = (id) => {
    const full_url = judgingRoundUrl + id + "/"
    return fetch(full_url, {credentials: "include", mode: "cors"})
	.then(res => res.json())
}


class JudgingRoundDisplay extends React.Component {
    state = {
        data: {},
    }

    componentDidUpdate(prevProps) {
	const judging_round_id = this.props.judging_round
	if (judging_round_id &&
	      prevProps.judging_round !== this.props.judging_round) {
	    fetchJudgingRoundData(judging_round_id)
		.then(data => {
		    this.setState({ data: data })
		})
	}
    }
    
    render() {
	if (this.props.judging_round) {
	    return (<ul>
		    <li>Full Name: {this.state.data.full_name}</li>
		    <li>Id: {this.state.data.id}</li>
		    <li>Is Active: {
			this.state.data.is_active ? "True" : "False"}
		    </li>
		    <li>Round Type: {this.state.data.round_type}</li>
		    <li>Cycle Based Round: {
			this.state.data.cycle_based_round ? "True" : "False"}
		    </li>
		    <li>Program Id: {this.state.data.program_id}</li>
		    </ul>)
	} else {
	    return (<div>No Judging Round Selected</div>)
	}
    }
}

export default JudgingRoundDisplay;
