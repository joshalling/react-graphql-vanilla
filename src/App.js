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

  getIssuesOfRepository = (path, cursor) => {
    const [organization, repository] = path.split("/");

    return axiosGithubGraphql.post("", {
      query: GET_ISSUES_OF_REPOSITORY,
      variables: { organization, repository, cursor }
    });
  };

  onChange = event => {
    this.setState({ path: event.target.value });
  };

  onSubmit = event => {
    this.onFetchFromGithub(this.state.path);

    event.preventDefault();
  };

  onFetchFromGithub = (path, cursor) => {
    this.getIssuesOfRepository(path, cursor).then(result => {
      this.setState(this.resolveIssuesQuery(result, cursor));
    });
  };

  onFetchMoreIssues = () => {
    const { endCursor } = this.state.organization.repository.issues.pageInfo;
    this.onFetchFromGithub(this.state.path, endCursor);
  };

  resolveIssuesQuery = (queryResult, cursor) => state => {
    const { data, errors } = queryResult.data;

    if (!cursor) {
      return {
        organization: data.organization,
        errors: errors
      };
    }

    const { edges: oldIssues } = state.organization.repository.issues;
    const { edges: newIssues } = data.organization.repository.issues;
    const updatedIssues = [...oldIssues, ...newIssues];

    return {
      organization: {
        ...data.organization,
        repository: {
          ...data.organization.repository,
          issues: {
            ...data.organization.repository.issues,
            edges: updatedIssues
          }
        }
      }
    };
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

        {organization && (
          <Organization
            organization={organization}
            errors={errors}
            onFetchMoreIssues={this.onFetchMoreIssues}
          />
        )}
      </div>
    );
  }
}

export default App;
