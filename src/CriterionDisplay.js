import React from 'react'
import { analyzeJudgingRoundUrl } from './utils'


class CriterionDisplay extends React.Component {
    render() {
	const analysis = this.props.analysis
	return <div>{ analysis.criterion_name }: { analysis.option }</div>
    }
}

export default CriterionDisplay
