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

function graphqlForPosts(graphql, createPage) {
  return graphql(`
     {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            tags
            slug
            date(formatString: "DD MMMM, YYYY")
            cover {
              childImageSharp {
                resize(width: 150) {
                  src
                }
              }
            }
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
exports.graphqlForPosts = graphqlForPosts;
