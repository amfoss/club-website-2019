const path = require("path")

function createProfiles(result, createPage) {
  const ProfileTemplate = path.resolve(`src/templates/profileTemplate.js`)
  const members = result.data.allMembersYaml.edges
  members.forEach(({ node }) => {
    createPage({
      path: "@" + node.username,
      component: ProfileTemplate,
      context: {
        username: node.username,
      },
    })
  })
}

function graphqlForProfiles(graphql, createPage) {
  return graphql(`
    {
      allMembersYaml(sort: { fields: firstName, order: ASC }) {
        edges {
          node {
            username
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    createProfiles(result, createPage)
  })
}

exports.graphqlForProfiles = graphqlForProfiles
