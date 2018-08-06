import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import CriterionEditRow from './CriterionEditRow';
import { analyzeJudgingRoundUrl, criterionOptionSpecPostURL } from './utils';

class EditCriteriaForm extends React.Component {
    state = {
	data: {"results": [],
	       "rows": []},
	submitRows: false,
    }
    constructor(props) {
	super(props);
	this.judging_round_id = props.judging_round_id;
	this.handleSubmit = this.handleSubmit.bind(this);
	
    }

    submitFunction(id, count, weight) {
	let url = criterionOptionSpecPostURL + id + "/";
	return fetch(url,
		     {credentials: "include",
		      mode: "cors",
		      method: "PATCH",
		      headers: {
			  "Content-Type": "application/json; charset=utf-8",
			  // "Content-Type": "application/x-www-form-urlencoded",
		      },		      
		      body: JSON.stringify({'count': count,
					    'weight': weight})
		     })


    }
    setRows(data) {
	var rows = data['data']['results'];
	this.setState({rows})   
	
    }
    fetchCriteriaData(id) {
	if (id != null && id != undefined){
	const full_url = analyzeJudgingRoundUrl + id;
	fetch(full_url, {credentials: "include", mode: "cors"})
	    .then(res => res.json())
	    .then(data => {
		this.setRows({ data });
	    })
	}
    }

    componentDidUpdate(prevProps) {
	this.fetchCriteriaData(prevProps.judging_round_id);
    }

    handleSubmit(event) {

	this.setState({ submitRows: true });
	this.setState({ submitRows: false });	
    }

    submitCriterionChange(criterionID) {
	
	}
	
    renderRows(){
	
	const criteria = this.state['rows'];
	if (criteria) {
	return criteria.map((criterion) => {
	    return <CriterionEditRow
	    count={criterion.count}
	    criterion={criterion}
	    weight={criterion.weight}
	    key={criterion.option + criterion.criterion_option_spec_id}
	    submitRows={this.state.submitRows}
	    submitFunction={this.submitFunction}
		/>
	})}
	}
    
    render() {

	
	return (<form>
		<Button type="button" onClick={this.handleSubmit}>
		Submit
		</Button>
		
		<Table>
		<Table.Header>
		<Table.Row>
		<Table.HeaderCell>
		Criterion
		</Table.HeaderCell>
		<Table.HeaderCell>
		Weight
		</Table.HeaderCell>
		<Table.HeaderCell>
		Min Reads
		</Table.HeaderCell>
		<Table.HeaderCell>
		Need
		</Table.HeaderCell>
		<Table.HeaderCell>
		Available
		</Table.HeaderCell>
		<Table.HeaderCell>
		Buffer
		</Table.HeaderCell>
		
		</Table.Row>
		</Table.Header>
		<Table.Body>
		{ this.renderRows() }
		</Table.Body>
		</Table>
		</form>);
    }
}

export default EditCriteriaForm;
