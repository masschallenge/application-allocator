import React from 'react';
import { analyzeJudgingRoundUrl } from './utils';
import CriterionDisplay from './CriterionDisplay';


class AnalyzeJudgingRoundDisplay extends React.Component {
    state = {
        data: {"init": true},
    }

    fetchAnalyzeJudgingRoundData(id) {
	const full_url = analyzeJudgingRoundUrl + id + "/"
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
	    this.fetchAnalyzeJudgingRoundData(judging_round_id)
	}
    }

    render() {
	if (this.props.judging_round) {
	    const data = this.state.data
	    if (data.results && data.results.length > 0) {
		var criteria = data.results.map(function(analysis){
		    return <li><CriterionDisplay analysis={analysis}/></li>
		})
		return <ul>{ criteria }</ul>
	    }
	}
	return (<div>No analysis data available</div>)
    }
}

export default AnalyzeJudgingRoundDisplay;
