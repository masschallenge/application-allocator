import React from "react";

class ApiCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      user: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/v1/user/182", {
      credentials: "include",
      mode: "cors"
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            user: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    // this.setState({isLoaded: true,
    // items: [{name: 'bar', price: 1.00}]})
  }

  render() {
    const { error, isLoaded, user } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {user.first_name} {user.last_name}
        </div>
      );
    }
  }
}

export default ApiCall;
