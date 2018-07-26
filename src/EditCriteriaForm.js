import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import CriterionEditRow from './CriterionEditRow';
import { analyzeJudgingRoundUrl } from './utils';

class EditCriteriaForm extends React.Component {
    state = {
	data: {"results": []}
    }
    constructor(props) {
	super(props);
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    fetchCriteriaData(id) {
	const full_url = analyzeJudgingRoundUrl + id + "/"
	return fetch(full_url, {credentials: "include", mode: "cors"})
	    .then(res => res.json())
	    .then(data => {
		this.setState({ data })
	    })
    }

    componentDidMount(prevProps) {
	this.fetchCriteriaData(48);
    }

    handleSubmit(event) {
	alert("submitted");
    }
    render() {
	var criteria = this.state.data.results;
	var rows = [];
	for (var i = 0; i < criteria.length; i++) {
	    let criterion = criteria[i];
	    console.log(criterion);
	    rows.push(<CriterionEditRow
		      count={criterion.count}
		      criterion={criterion}
		      weight={criterion.weight}
		        key={criterion.option + criterion.criterion_option_spec_id}/>);

	   
	}
	return (<form onSubmit={this.handleSubmit}>
		<Button onClick={this.handleSubmit}>
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

		{rows}
		
		</Table.Body>
		</Table>
		</form>);
    }
}

export default EditCriteriaForm;
