import React from 'react';
import { Table } from 'semantic-ui-react';

class CriterionEditRow extends React.Component {
    render() {
        const criterion = this.props.criterion;
        return (
		<Table.Row>
		  <Table.Cell>
		    { criterion.option }
	          </Table.Cell>
		  <Table.Cell>
		    {criterion.weight}
                  </Table.Cell>
 		  <Table.Cell>
		    {criterion.count}
	          </Table.Cell>
		  <Table.Cell>
		    {criterion.remaining_needed_reads}
	          </Table.Cell>
		  <Table.Cell>
		    {criterion.remaining_capacity}
	          </Table.Cell>
		  <Table.Cell>
		    {criterion.remaining_capacity - criterion.remaining_needed_reads}
	    </Table.Cell>
		</Table.Row>
)
    }
}

export default CriterionEditRow
