const { graphqlForProfiles } = require("./src/scripts/create-profiles");
const { graphqlForBlogs } = require("./src/scripts/create-blog");
function createIndividualPages(actions, graphql) {
  const { createPage } = actions;

  return Promise.all([
    graphqlForProfiles(graphql, createPage),
    graphqlForBlogs(graphql, createPage)
  ])
}

exports.createPages = ({ graphql, actions }) => {
  return createIndividualPages(actions, graphql);
}
