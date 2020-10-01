const path = require('path');
const jimp = require('jimp');
const dateFormat = require('dateformat');

async function generateSocialCard(frontmatter, output) {
  const [image, font48, font24] = await Promise.all([
    jimp.read(path.resolve(`seo/base.jpg`)),
    jimp.loadFont(path.resolve(`seo/fonts/DejaVuSansCondensed_white_bold_48.fnt`)),
    jimp.loadFont(path.resolve(`seo/fonts/DejaVuSansCondensed_white_italic_32.fnt`)),
  ]);
  const WIDTH = 1200;
  const HEIGHT = 630;
  const PADDING = 100;

  image
    .resize(WIDTH, HEIGHT)
    .print(font48, PADDING, 15 + PADDING, frontmatter.title, WIDTH - PADDING * 2)
    .print(
      font24,
      PADDING + 20,
      248 + PADDING,
      dateFormat(frontmatter.date, 'mmmm dS, yyyy'),
      WIDTH - PADDING * 2
    )
    .write(output);
}

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
    const output = path.join('./public', 'news', article.slug, 'seo.jpg');
    generateSocialCard(article, output);
  });
}

function graphqlForNews(graphql, createPage) {
  return graphql(`
    {
      cms {
        news {
          title
          slug
          date
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
