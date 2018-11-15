export const GET_ORGANIZATION = `
    {
        organization(login: "freeCodeCamp") {
            name
            url
            repository(name: "freeCodeCamp") {
                name
                url
            }
        }
    }
`;
