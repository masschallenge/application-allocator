import React from "react";
import { Button, Table } from "semantic-ui-react";
import CriterionEditRow from "./CriterionEditRow";
import { analyzeJudgingRoundUrl, criterionOptionSpecPostURL } from "./utils";
import { withRouter } from "react-router";

class EditCriteriaForm extends React.Component {
  state = {
    data: {
      results: [],
	rows: []
	
    },
      keys: [],
      rows:[]
  };
  constructor(props) {
    super(props);
    this.judging_round_id = props.judging_round_id;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleCountChange = this.handleCountChange.bind(this);
  }

  submitFunction(id, count, weight) {
    let url = criterionOptionSpecPostURL + id + "/";
    return fetch(url, {
      credentials: "include",
      mode: "cors",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        count: count,
        weight: weight
      })
    });
  }
    setRows(data) {
      let data_rows = data["data"]["results"]
      var rows = data_rows.reduce(function(obj, x) {
	  obj[x.criterion_option_spec_id] = {
	      "weight": x.weight,
	      "count": x.count,
	      "criterion": x,
	      "spec_id": x.criterion_option_spec_id,
	      "option": x.criterion_type == "judge" ? x.option : x.criterion_name
	      
	  }
	  return obj;
      }, {});
      var keys = [];
	for (let i = 0; i<data_rows.length; i++) {
	  let spec_id = data_rows[i].criterion_option_spec_id
	    if (!(keys.includes(spec_id))) {
	      keys.push(spec_id);}
	}
						
      this.setState({ rows, keys });
  }
    
  fetchCriteriaData(id) {
    if (id != null && id != undefined) {
      const full_url = analyzeJudgingRoundUrl + id;
      fetch(full_url, { credentials: "include", mode: "cors" })
        .then(res => res.json())
        .then(data => {
          this.setRows({ data });
        });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.judging_round_id != prevProps.judging_round_id) {
      this.fetchCriteriaData(prevProps.judging_round_id);
      this.judging_round_id = prevProps.judging_round_id;
    }
  }

  handleSubmit = async function(event) {
    await this.state.rows.forEach(row => {
      const { criterion_option_spec_id, count, weight } = row;
      this.submitFunction(criterion_option_spec_id, count, weight);
    });
    this.props.history.push("app-allocator-setup");
  };
  
  handleWeightChange(event, criterion_option_spec_id) {
    const rows = this.state.rows.map(row => {
      if (row.criterion_option_spec_id === criterion_option_spec_id) {
        row.weight = event.target.value;
      }
      return row;
    });
    this.setState({ rows });
  }

  handleCountChange(event, criterion_option_spec_id) {
    const rows = this.state.rows.map(row => {
      if (row.criterion_option_spec_id === criterion_option_spec_id) {
        row.count = event.target.value;
      }
      return row;
    });
    this.setState({ rows });
  }

    renderRows() {
	const keys = this.state.keys;
	const rows = this.state.rows;
	if (keys.length > 0) {
	    return keys.map(key => {
		return <CriterionEditRow
	    count={rows[key].count}
		weight={rows[key].weight}
		option={rows[key].option}
	    key={key}
	    criterion={rows[key].criterion}
	    handleWeightChange={this.handleWeightChange}
	    handleCountChange={this.handleCountChange}
		/>})
	}
    }

  render() {
    return (
      <form>
        <Button type="button" onClick={this.handleSubmit}>
          Submit
        </Button>

        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Criterion</Table.HeaderCell>
              <Table.HeaderCell>Weight</Table.HeaderCell>
              <Table.HeaderCell>Min Reads</Table.HeaderCell>
              <Table.HeaderCell>Need</Table.HeaderCell>
              <Table.HeaderCell>Available</Table.HeaderCell>
              <Table.HeaderCell>Buffer</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.renderRows()}</Table.Body>
        </Table>
      </form>
    );
  }
}

export default withRouter(EditCriteriaForm);
