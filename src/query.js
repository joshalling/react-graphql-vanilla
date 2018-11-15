export const GET_ISSUES_OF_REPOSITORY = `
  query ($organization: String!, $repository: String!, $cursor: String){
    organization(login: $organization) {
      name
      url
      repository(name: $repository) {
        id
        name
        url
        viewerHasStarred
        issues(first: 5, after: $cursor, states: [OPEN]) {
          edges {
            node {
              id
              title
              url
              reactions(last: 3) {
                edges {
                  node {
                    id
                    content
                  }
                }
              }
            }
          }
          totalCount,
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  }
`;
