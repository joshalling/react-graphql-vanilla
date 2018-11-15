import React from "react";
import Repository from "./Repository";

const Organization = ({ organization, errors, onFetchMoreIssues }) =>
  errors ? (
    <div>
      <p>
        <strong>Something went wrong</strong>
        {errors.map(error => error.message).join(" ")}
      </p>
    </div>
  ) : (
    <div>
      <p>
        <strong>Issues from Organization: </strong>
        <a href={organization.url}>{organization.name}</a>
      </p>
      <Repository repository={organization.repository} onFetchMoreIssues={onFetchMoreIssues} />
    </div>
  );

export default Organization;
