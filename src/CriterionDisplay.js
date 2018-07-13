import React from 'react'
import { analyzeJudgingRoundUrl } from './utils'


class CriterionDisplay extends React.Component {
    render() {
        const analysis = this.props.analysis
        return (
            <div>
                { analysis.criterion_name } { analysis.option }:
            Status: { analysis.completed_required_reads } of {analysis.total_required_reads},
            Need: { analysis.remaining_needed_reads },
            Available: { analysis.remaining_capacity },
            Buffer: { analysis.remaining_capacity - analysis.remaining_needed_reads }
            </div>)
    }
}

export default CriterionDisplay
