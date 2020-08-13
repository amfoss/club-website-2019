const { graphqlForProfiles } = require('./src/scripts/create-profiles');
const { graphqlForNews } = require('./src/scripts/create-articles');
const { graphqlForBlogs } = require('./src/scripts/create-blogs');
const { graphqlForProjects } = require('./src/scripts/create-projects');

function createIndividualPages(actions, graphql) {
  const { createPage } = actions;

  return Promise.all([
    graphqlForProfiles(graphql, createPage),
    graphqlForNews(graphql, createPage),
    graphqlForBlogs(graphql, createPage),
    graphqlForProjects(graphql, createPage),
  ]);
}

exports.createPages = ({ graphql, actions }) => {
  return createIndividualPages(actions, graphql);
};
