import React from 'react'
import { Form, Select } from 'semantic-ui-react'

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
        fetch("http://localhost:8000/api/v1/judging_round/?round_type=Online",
              {credentials: "include", mode: "cors"})
            .then(res => res.json())
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
            return (<Form.Field control={Select}
                                label="Judging Round: "
                                options={options} />);
        }
    }
}

export default JudgingRoundSelector;