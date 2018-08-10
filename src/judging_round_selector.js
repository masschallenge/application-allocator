import React from 'react'
import { Form, Select } from 'semantic-ui-react'
import judgingRoundUrl from './utils'


class JudgingRoundSelector extends React.Component {
    state = {
        error: null,
        isLoaded: false,
	select_value: null,
        user: []
    }

    componentDidMount() {
	this.fetchJudgingRoundList()
    }

    fetchJudgingRoundList() {
	fetch(judgingRoundUrl + "?round_type=Online", {credentials: "include", mode: "cors"})
	    .then(res => res.json())
	    .then(
                (result) => {
		    const first_id = result['results'][0].id
		    this.props.on_select(null, { value: first_id } )
                    this.setState({
                        isLoaded: true,
			select_value: first_id,
                        results: result['results'],
                    });
                }).catch(
                (error) => {
                    this.setState({
                        isLoaded: true,
			select_value: null,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, results } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            const options = results.map(result => ({key: result.id,
                                              text: result.full_name,
                                              value: result.id}))
            return (<Form.Select
                    label={"Judging Round: "}
		    onChange={this.props.on_select}
		    defaultValue={this.state.select_value}
                    options={options} />);
        }
    }
}

export default JudgingRoundSelector;
