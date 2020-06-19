const path = require('path');

function createArticles(result, createPage) {
  const ArticleTemplate = path.resolve(`src/templates/articleTemplate.js`);
  const articles = result.data.cms.news;
  articles.map((article) => {
    createPage({
      path: 'news/' + article.slug,
      component: ArticleTemplate,
      context: {
        slug: article.slug,
      },
    });
  });
}

function graphqlForNews(graphql, createPage) {
  return graphql(`
    {
      cms {
        news {
          slug
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    createArticles(result, createPage);
  });
}

exports.graphqlForNews = graphqlForNews;
