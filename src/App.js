import React, { Component } from "react";
import axiosGithubGraphql from "./axiosGithubGraphql";
import Organization from "./Organization";

const GET_ORGANIZATION = `
    {
        organization(login: "freeCodeCamp") {
            name
            url
        }
    }
`;

const TITLE = "React GraphQL Github Client";

class App extends Component {
    state = {
        path: "freeCodeCamp/freeCodeCamp",
        organization: null,
        errors: null
    };

    componentDidMount() {
        this.onFetchFromGithub();
    }

    onChange = event => {
        this.setState({ path: event.target.value });
    };

    onSubmit = event => {
        //fetch data

        event.preventDefault();
    };

    onFetchFromGithub = () => {
        axiosGithubGraphql.post("", { query: GET_ORGANIZATION }).then(result => {
            this.setState(() => ({
                organization: result.data.data.organization,
                errors: result.data.errors
            }));
        });
    };

    render() {
        const { path, organization, errors } = this.state;
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

                <hr />

                {organization && <Organization organization={organization} errors={errors} />}
            </div>
        );
    }
}

export default App;
