import React from 'react';
import { Table } from 'semantic-ui-react';
import CriterionEditRow from './CriterionEditRow';
import SetCriteriaHeader from './SetCriteriaHeader';
import EditCriteriaForm from './EditCriteriaForm';
import JudgingRoundSelector from './judging_round_selector';

class SetCriteria extends React.Component {
    state = {
	judging_round_id: null
    }
    select_judging_round = (_, data) => {
	this.setState({judging_round: data.value});
    }
    


    componentDidUpdate(prevProps) {
	const judging_round_id = this.props.judging_round;
	if (judging_round_id &&
	      prevProps.judging_round !== this.props.judging_round) {
	    this.fetchCriteriaData(judging_round_id);
	}
    }

    render() {

	return (<div>
		<SetCriteriaHeader />
		<JudgingRoundSelector on_select={this.select_judging_round} />
	 	<EditCriteriaForm judging_round_id={this.state.judging_round}/>
		</div>
	       )
	
    }
}

export default SetCriteria;
