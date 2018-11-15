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
                </li>
            ))}
        </ul>
    </div>
);

export default Repository;
