import React, { Component } from "react";
import Organization from "./Organization";
import axiosGithubGraphql from "./axiosGithubGraphql";
import { GET_ISSUES_OF_REPOSITORY } from "./query";

const TITLE = "React GraphQL Github Client";

class App extends Component {
  state = {
    path: "freeCodeCamp/freeCodeCamp",
    organization: null,
    errors: null
  };

  componentDidMount() {
    this.onFetchFromGithub(this.state.path);
  }

  getIssuesOfRepository = path => {
    const [organization, repository] = path.split("/");

    return axiosGithubGraphql.post("", {
      query: GET_ISSUES_OF_REPOSITORY,
      variables: { organization, repository }
    });
  };

  onChange = event => {
    this.setState({ path: event.target.value });
  };

  onSubmit = event => {
    this.onFetchFromGithub(this.state.path);

    event.preventDefault();
  };

  onFetchFromGithub = path => {
    this.getIssuesOfRepository(path).then(result => {
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
