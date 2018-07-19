import React from 'react';
import { Table } from 'semantic-ui-react';

class CriterionEditRow extends React.Component {
    render() {
        const criterion = this.props.criterion;
        return (
		<Table.Row>
		  <Table.Cell>
		    { criterion.criterion_option }
	          </Table.Cell>
		  <Table.Cell>
		    {criterion.weight}
                  </Table.Cell>
 		  <Table.Cell>
		    {criterion.count}
	          </Table.Cell>
		  <Table.Cell>
		    {criterion.need}
	          </Table.Cell>
		  <Table.Cell>
		    {criterion.available}
	          </Table.Cell>
		  <Table.Cell>
		    {criterion.available - criterion.need}
	    </Table.Cell>
		</Table.Row>
)
    }
}

export default CriterionEditRow
