import React, { Component } from "react";
import axios from "axios";

const axiosGithubGraphql = axios.create({
    baseURL: "https://api.github.com/graphql",
    headers: {
        Authorization: `bearer ${process.env.GITHUB_ACCESS_TOKEN}`
    }
});

const TITLE = "React GraphQL Github Client";

class App extends Component {
    state = {
        path: "freeCodeCamp/freeCodeCamp"
    };

    componentDidMount() {
        //fetch
    }

    onChange = event => {
        this.setState({ path: event.target.value });
    };

    onSubmit = event => {
        //fetch data

        event.preventDefault();
    };

    render() {
        const { path } = this.state;
        return (
            <div>
                <h1>{TITLE}</h1>

                <form onSubmit={this.onSubmit}>
                    <label htmlFor="url">Show open issues for https://github.com/</label>
                    <input
                        id="url"
                        type="text"
                        value={path}
                        onChange={this.onChange}
                        style={{ width: "300px" }}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default App;
