import React from 'react';
import { Table } from 'semantic-ui-react';
import CriterionEditRow from './CriterionEditRow';
import SetCriteriaHeader from './SetCriteriaHeader';
import EditCriteriaTable from './EditCriteriaTable';

class SetCriteria extends React.Component {
    state = {
    }

    fetchCriteriaData(id) {
	var data = {
	};
	this.setState({ data });
    }

    componentWillUpdate(prevProps) {
	this.fetchCriteriaData();
    }

    render() {
		
	return (<div>
		<SetCriteriaHeader />
		<EditCriteriaTable />
		</div>
	       )
    }
}

export default SetCriteria;
