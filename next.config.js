module.exports = {};

const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const withYAML = require('next-yaml');
module.exports = withYAML(module.exports);
module.exports = {
  siteMetadata: {
    title: `amFOSS (FOSS@Amrita)`,
    description: `A student community based in Amrita Vishwa Vidyapeetham, Amritapuri focused on contributing to FOSS and mentoring students to achieve excellence.`,
    author: 'amfoss',
    siteUrl: 'https://amfoss.in/',
  },
  trailingSlash: true,
};
module.exports = withCSS(
  withSass({
    webpack(config, options) {
      target: 'serverless',
        config.module.rules.push({ test: /\.md$/, use: 'raw-loader' });
      config.module.rules.push({ test: /\.yml$/, use: 'raw-loader' });
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      });
      return config;
    },
  })
);
