const path = require('path');

function createBlogPages(result, createPage) {
  const BlogTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const blogs =result.data.allMarkdownRemark.edges;
  blogs.forEach(({node}) => {
    createPage({
      path: '@' + node.frontmatter.author + '/' + node.frontmatter.slug,
      component: BlogTemplate,
      context: {
        author: node.frontmatter.author,
        slug: node.frontmatter.slug
      },
    });
  });
}

function graphqlForBlogs(graphql, createPage) {
  return graphql(`
     {
      allMarkdownRemark(sort: { 
      order: DESC
      fields: [frontmatter___date] 
      }) 
      {
        edges {
          node {
            frontmatter {
              slug
              author
            }
          }
        }
      }
    }
    `).then(result => {
    if (result.errors) {
      throw result.errors;
    }
    createBlogPages(result, createPage);
  });
}
exports.graphqlForBlogs = graphqlForBlogs;
