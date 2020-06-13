const path = require('path');

function createProfiles(result, createPage) {
  const ProfileTemplate = path.resolve(`src/templates/profileTemplate.js`);
  const members = result.data.cms.activeUsers;
  members.forEach(({ username }) => {
    createPage({
      path: '@' + username,
      component: ProfileTemplate,
      context: {
        username: username,
      },
    });
  });
}

function graphqlForProfiles(graphql, createPage) {
  return graphql(`
    query {
      cms {
        activeUsers(sort: "username") {
          username
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    createProfiles(result, createPage);
  });
}

exports.graphqlForProfiles = graphqlForProfiles;
