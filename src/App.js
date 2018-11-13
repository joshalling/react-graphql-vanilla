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
    render() {
        return (
            <div>
                <h1>{TITLE}</h1>
            </div>
        );
    }
}

export default App;
