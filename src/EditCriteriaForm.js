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
	fetch(full_url, {credentials: "include", mode: "cors"})
	    .then(res => res.json())
	    .then(data => {
		this.setRows({ data })
	    })


    }
    submitFunction(url) {
	let url = criterionOptionSpecPostURL + row.criterion.id + "/";
	return fetch(url,
		     {credentials: "include",
		      mode: "cors",
		      method: "POST",
		      body: JSON.stringify({'count': row.count,
					    'weight': row.weight})
		     })


    }
    setRows(data) {
	var criteria = data['data']['results'];
	var rows = [];    

	for (var i = 0; i < criteria.length; i++) {
	    
	    let criterion = criteria[i];
	    rows.push(<CriterionEditRow
		      count={criterion.count}
		      criterion={criterion}
		      weight={criterion.weight}
		      key={criterion.option + criterion.criterion_option_spec_id}/>);
	}
	this.setState({rows})   
	
    }

    componentDidMount(prevProps) {
	this.fetchCriteriaData(48);
    }

    handleSubmit(event) {
	for (let i = 0; i < this.state['rows'].length; i++) {
	    let row = this.state['rows'][i];
		     	    
	    this.state['rows'][i].submit();
	}
    }

    submitCriterionChange(criterionID) {
	
    }
    
    render() {

	
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

		{this.state.rows}
		
		</Table.Body>
		</Table>
		</form>);
    }
}

export default EditCriteriaForm;
