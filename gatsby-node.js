const { graphqlForProfiles } = require("./src/scripts/create-profiles");
const { graphqlForPosts } = require("./src/scripts/create-posts");
const { graphqlForProjects } = require("./src/scripts/create-projects");

function createIndividualPages(actions, graphql) {
  const { createPage } = actions;

  return Promise.all([
    graphqlForProfiles(graphql, createPage),
    graphqlForPosts(graphql, createPage),
    graphqlForProjects(graphql, createPage)
  ])
}

exports.createPages = ({ graphql, actions }) => {
  return createIndividualPages(actions, graphql);
}
