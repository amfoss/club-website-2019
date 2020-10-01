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
    .print(font48, PADDING, 50 + PADDING, frontmatter.title, WIDTH - PADDING * 2)
    .print(
      font24,
      PADDING + 20,
      248 + PADDING,
      dateFormat(frontmatter.date, 'mmmm dS, yyyy'),
      WIDTH - PADDING * 2
    )
    .write(output);
}

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
    const output = path.join('./public', 'blog', article.slug, 'seo.jpg');
    generateSocialCard(article, output);
  });
}

function graphqlForBlogs(graphql, createPage) {
  return graphql(`
    {
      cms {
        blogs {
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
    createBlogs(result, createPage);
  });
}

exports.graphqlForBlogs = graphqlForBlogs;
