import React from "react";

const Organization = ({ organization, errors }) => (
    <div>
        {errors ? (
            <p>
                <strong>Something went wrong</strong>
                {errors.map(error => error.message).join(" ")}
            </p>
        ) : (
            <p>
                <strong>Issues from Organization:</strong>
                <a href={organization.url}>{organization.name}</a>
            </p>
        )}
    </div>
);

export default Organization;
