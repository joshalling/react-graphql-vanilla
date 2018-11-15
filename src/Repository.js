import React from "react";

const Repository = ({ repository }) => (
    <div>
        <p>
            <strong>In Respository: </strong>
            <a href={repository.url}>{repository.name}</a>
        </p>
    </div>
);

export default Repository;
