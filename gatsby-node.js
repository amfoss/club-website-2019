const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const ProfileTemplate = path.resolve(`src/templates/profileTemplate.js`)

  return graphql(`
     {
        allMembersYaml(sort:{
            fields: firstName
            order: ASC
        })
        {
            edges
            {
                node
                {
                    username
                }
            }
        }
     }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMembersYaml.edges.forEach(({ node }) => {
      createPage({
        path: '@' + node.username,
        component: ProfileTemplate,
        context: {
          username: node.username
        }, // additional data can be passed via context
      })
    })
  })
}
