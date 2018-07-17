import React from 'react';

class SetCriteria extends React.Component {
    state = {
	data: {},
    }

    fetchCriteriaData(id) {
	data = {
	    "results": [
		{"criterion_option_spec_id": 1,
		 "criterion_option": "Just exists",
		 "criterion_name": "exists",
		 "weight": 10,
		 "count": 4,
		 "need": 1234,
		 "available": 2345,
		},
		{"criterion_option_spec_id": 2,
		 "criterion_option": "10EEE",
		 "criterion_name": "shoe_size",
		 "weight": 10,
		 "count": 1,
		 "need": 1234,
		 "available": 1432,
		},
		{"criterion_option_spec_id": 3,
		 "criterion_option": "9",
		 "criterion_name": "shoe_size",
		 "weight": 10,
		 "count": 1,
		 "need": 1234,
		 "available": 1637,
		}	
	    ]
	};
	this.setState({ data });
    }

    componentDidUpdate(prevProps) {
	this.fetchCriteriaData();
    }

    render() {
	return (<h1>"Hello!"</h1>);
    }
}

export default SetCriteria;
