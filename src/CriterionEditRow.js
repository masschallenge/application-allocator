import React from "react";
import { Table } from "semantic-ui-react";

class CriterionEditRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: props.weight,
      count: props.count,
      criterion: props.criterion
    }
  }

  render() {
    const { criterion, handleCountChange, handleWeightChange } = this.props;
    return (
      <Table.Row>
        <Table.Cell>{criterion.option}</Table.Cell>
        <Table.Cell>
          <input
            type="number"
            value={this.state.weight}
            onChange={event => handleWeightChange(event, criterion_option_spec_id)}
          />
        </Table.Cell>
        <Table.Cell>
          <input
            type="number"
            value={this.state.count}
			onChange={event => handleCountChange(event, criterion_option_spec_id)}
          />
        </Table.Cell>
        <Table.Cell>{criterion.remaining_needed_reads}</Table.Cell>
        <Table.Cell>{criterion.remaining_capacity}</Table.Cell>
        <Table.Cell>
          {criterion.remaining_capacity - criterion.remaining_needed_reads}
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default CriterionEditRow
