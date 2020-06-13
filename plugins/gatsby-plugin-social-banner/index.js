const jimp = require('jimp');
const path = require('path');
const dateFormat = require('dateformat');

module.exports = ({ markdownNode }) => {
  const { frontmatter } = markdownNode;

  const output = path.join('./public', 'news', frontmatter.slug, 'seo.jpg');

  async function generateSocialCard() {
    const [image, font48, font24] = await Promise.all([
      jimp.read(path.join(__dirname, 'base.jpg')),
      jimp.loadFont(
        path.join(__dirname, 'fonts/DejaVuSansCondensed_white_bold_48.fnt')
      ),
      jimp.loadFont(
        path.join(__dirname, 'fonts/DejaVuSansCondensed_white_italic_32.fnt')
      ),
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

  generateSocialCard();
};
