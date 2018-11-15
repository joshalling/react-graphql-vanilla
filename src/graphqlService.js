import axiosGithubGraphql from "./axiosGithubGraphql";
import { GET_ISSUES_OF_REPOSITORY } from "./query";

export const getIssuesOfRepository = (path, cursor) => {
  const [organization, repository] = path.split("/");

  return axiosGithubGraphql.post("", {
    query: GET_ISSUES_OF_REPOSITORY,
    variables: { organization, repository, cursor }
  });
};
