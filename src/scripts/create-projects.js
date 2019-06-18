const path = require("path")

function createProjectPages(result, createPage) {
  const ProjectTemplate = path.resolve(`src/templates/projectTemplate.js`)
  const projects = result.data.allProjectsYaml.edges
  projects.forEach(({ node }) => {
    createPage({
      path: "/projects" + "/" + node.slug,
      component: ProjectTemplate,
      context: {
        title: node.title
      },
    })
  })
}

function graphqlForProjects(graphql, createPage) {
  return graphql(`
    {
      allProjectsYaml(sort: { fields: slug, order: ASC }) {
        edges {
          node {
            title
            members{
              user
              role
            }
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    createProjectPages(result, createPage)
  })
}

exports.graphqlForProjects = graphqlForProjects
