const path = require('path');

function createProjectPages(result, createPage) {
  const ProjectTemplate = path.resolve(`src/templates/projectTemplate.js`);
  const projects = result.data.cms.projects;
  projects.map((project) => {
    createPage({
      path: '/projects' + '/' + project.slug,
      component: ProjectTemplate,
      context: {
        slug: project.slug,
      },
    });
  });
}

function graphqlForProjects(graphql, createPage) {
  return graphql(`
    {
      cms {
        projects {
          slug
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    createProjectPages(result, createPage);
  });
}

exports.graphqlForProjects = graphqlForProjects;
