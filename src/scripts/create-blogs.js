const path = require('path');

function createBlogs(result, createPage) {
  const BlogTemplate = path.resolve(`src/templates/blogTemplate.js`);
  const articles = result.data.cms.blogs;
  articles.map((article) => {
    createPage({
      path: 'blog/' + article.slug,
      component: BlogTemplate,
      context: {
        slug: article.slug,
      },
    });
  });
}

function graphqlForBlogs(graphql, createPage) {
  return graphql(`
    {
      cms {
        blogs {
          slug
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    createBlogs(result, createPage);
  });
}

exports.graphqlForBlogs = graphqlForBlogs;
