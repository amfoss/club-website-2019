const path = require("path")

function createProfiles(result, createPage) {
  const ProfileTemplate = path.resolve(`src/templates/profileTemplate.js`)
  const members = result.data.cms.users
  members.forEach(({ user }) => {
    createPage({
      path: "@" + user.username,
      component: ProfileTemplate,
      context: {
        username: user.username,
      },
    })
  })
}

function graphqlForProfiles(graphql, createPage) {
  return graphql(`
    {
      cms{
        users(sort: "username"){
          username
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
