const { graphqlForProfiles } = require("./src/scripts/create-profiles");
const { graphqlForBlogs } = require("./src/scripts/create-blog");
const { graphqlForProjects } = require("./src/scripts/create-project");

function createIndividualPages(actions, graphql) {
  const { createPage } = actions;

  return Promise.all([
    graphqlForProfiles(graphql, createPage),
    graphqlForBlogs(graphql, createPage),
    graphqlForProjects(graphql, createPage)
  ])
}

exports.createPages = ({ graphql, actions }) => {
  return createIndividualPages(actions, graphql);
}
