import React from 'react';
import { Table } from 'semantic-ui-react';
import CriterionEditRow from './CriterionEditRow';
import { analyzeJudgingRoundUrl } from './utils';

class EditCriteriaTable extends React.Component {
    state = {
	data: {"results": []}
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

    render() {
	var criteria = this.state.data.results;
	var rows = [];
	for (var i = 0; i < criteria.length; i++) {
	    let criterion = criteria[i];
	    console.log(criterion);
	    rows.push(<CriterionEditRow criterion={criterion} key={criterion.option + criterion.criterion_option_spec_id}/>);
	
	}
	return (<Table>
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
	       </Table>);
    }
}

export default EditCriteriaTable;
