import axiosGithubGraphql from "./axiosGithubGraphql";
import { GET_ISSUES_OF_REPOSITORY, ADD_STAR } from "./query";

export const getIssuesOfRepository = (path, cursor) => {
  const [organization, repository] = path.split("/");

  return axiosGithubGraphql.post("", {
    query: GET_ISSUES_OF_REPOSITORY,
    variables: { organization, repository, cursor }
  });
};

export const addStarToRepository = repositoryId => {
  return axiosGithubGraphql.post("", {
    query: ADD_STAR,
    variables: { repositoryId }
  });
};
