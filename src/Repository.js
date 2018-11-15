import React from "react";

const Repository = ({ repository }) => (
  <div>
    <p>
      <strong>In Respository: </strong>
      <a href={repository.url}>{repository.name}</a>
    </p>
    <ul>
      {repository.issues.edges.map(({ node: issue }) => (
        <li key={issue.id}>
          <a href={issue.url}>{issue.title}</a>
          {issue.reactions.edges.length > 0 && (
            <ul>
              {issue.reactions.edges.map(({ node: reaction }) => (
                <li key={reaction.id}>{reaction.content}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Repository;
