const { graphqlForProfiles } = require("./src/scripts/create-profiles");

function createIndividualPages(actions, graphql) {
  const { createPage } = actions;

  return Promise.all([
    graphqlForProfiles(graphql, createPage),
  ])
}

exports.createPages = ({ graphql, actions }) => {
  return createIndividualPages(actions, graphql);
}
