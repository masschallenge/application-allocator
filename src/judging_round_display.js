import React from 'react'
import { analyzeJudgingRoundUrl, judgingRoundUrl } from './utils'


class JudgingRoundDisplay extends React.Component {
    state = {
        data: {},
    }

    fetchJudgingRoundData(id) {
	const full_url = judgingRoundUrl + id + "/"
	return fetch(full_url, {credentials: "include", mode: "cors"})
	    .then(res => res.json())
	    .then(data => {
		this.setState({ data })
	    })
    }

    componentDidUpdate(prevProps) {
	const judging_round_id = this.props.judging_round
	if (judging_round_id &&
	      prevProps.judging_round !== this.props.judging_round) {
	    this.fetchJudgingRoundData(judging_round_id)
	}
    }
    
    render() {
	if (this.props.judging_round) {
	    const data = this.state.data
	    return (<ul>
		    <li>Props Judging Round: {this.props.judging_round}</li>
		    <li>Full Name: {data.full_name}</li>
		    <li>Id: {data.id}</li>
		    <li>Is Active: {data.is_active ? "True" : "False"}
		    </li>
		    <li>Round Type: {data.round_type}</li>
		    <li>Cycle Based Round: {
			data.cycle_based_round ? "True" : "False"}
		    </li>
		    <li>Program Id: {data.program_id}</li>
		    </ul>)
	} else {
	    return (<div>No Judging Round Selected</div>)
	}
    }
}

export default JudgingRoundDisplay;
