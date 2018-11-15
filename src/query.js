export const GET_ORGANIZATION = `
    {
        organization(login: "freeCodeCamp") {
            name
            url
            repository(name: "freeCodeCamp") {
                name
                url
                issues(last: 5) {
                    edges {
                        node {
                            id
                            title
                            url
                        }
                    }
                }
            }
        }
    }
`;
