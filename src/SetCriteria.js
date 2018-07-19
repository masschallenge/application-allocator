import React from 'react';
import Table from 'semantic-ui-react';


class SetCriteria extends React.Component {
    state = {
	criteria: [
		{"criterion_option_spec_id": 1,
		 "criterion_option": "Just exists",
		 "criterion_name": "exists",
		 "weight": 60,
		 "count": 4,
		 "need": 1234,
		 "available": 2345,
		},
		{"criterion_option_spec_id": 2,
		 "criterion_option": "10EEE",
		 "criterion_name": "shoe_size",
		 "weight": 40,
		 "count": 1,
		 "need": 1234,
		 "available": 1432,
		},
		{"criterion_option_spec_id": 3,
		 "criterion_option": "9",
		 "criterion_name": "shoe_size",
		 "weight": 40,
		 "count": 1,
		 "need": 1234,
		 "available": 1637,
		}	
	    ]
	
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
	var criteria = this.state.criteria;
	var rows = [];
	for (var i = 0; i < criteria.length; i++) {
	    let criterion = criteria[i];
	    rows.push(<tr>
		<td>
		{criterion['criterion_option']}
		      </td>
		<td>
		{criterion['weight']}
		</td>
		<td>
		{criterion['count']}
		</td>
		<td>
		{criterion['need']}
		</td>
		<td>
		{criterion['available']}
		</td>
		<td>
		{criterion['available'] - criterion['need']}
		</td>
		      
		</tr>
		     );
	}
		
	return (<table>
		<thead>
		<tr>
		<td>
		Criterion
		</td>
		<td>
		Weight
		</td>
		<td>
		Min Reads
		</td>
		<td>
		Need
		</td>
		<td>
		Available
		</td>
		<td>
		Buffer
		</td>
		
		</tr>
		</thead>
		<tbody>

		{rows}
		
		</tbody>
	       </table>);
    }
}

export default SetCriteria;
