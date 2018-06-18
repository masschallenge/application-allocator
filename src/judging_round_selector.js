import React from 'react'
import { Form, Select } from 'semantic-ui-react'
import judgingRoundUrl from './utils'


const fetchJudgingRoundList = () => {
    const full_url = judgingRoundUrl
    return fetch(full_url, {credentials: "include", mode: "cors"})
	.then(res => res.json())
}


class JudgingRoundSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            user: []
        };
    }

    componentDidMount() {
	fetchJudgingRoundList()
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        results: result['results'],
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
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
                    options={options} />);
        }
    }
}

export default JudgingRoundSelector;
