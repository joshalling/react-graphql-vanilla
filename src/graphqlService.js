import axiosGithubGraphql from "./axiosGithubGraphql";
import { ADD_STAR, GET_ISSUES_OF_REPOSITORY, REMOVE_STAR } from "./query";

export const getIssuesOfRepository = (path, cursor) => {
  const [organization, repository] = path.split("/");

  return axiosGithubGraphql.post("", {
    query: GET_ISSUES_OF_REPOSITORY,
    variables: { organization, repository, cursor }
  });
};

export const toggleStar = (repositoryId, viewerHasStarred) => {
  return axiosGithubGraphql.post("", {
    query: viewerHasStarred ? REMOVE_STAR : ADD_STAR,
    variables: { repositoryId }
  });
};
