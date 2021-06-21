const qry = {
  query: `
      {
      viewer {
      login
    starredRepositories {
      edges {
        node {
          name
          url
          description
          primaryLanguage {
            name
          }
        }
      }
    }
  }
      }
      `,
};
export default qry