module.exports = {};

const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const withYAML = require('next-yaml');
module.exports = withYAML(module.exports);
module.exports = {
  siteMetadata: {
    title: `FOSS@Amrita (amFOSS) - Code | Share | Grow`,
    description: `A Student Community of Open Source Enthusiasts based in Amrita Vishwa Vidyapeetham, Amritapuri. We promote and contribute to FOSS, and mentor students for achieving excellence.`,
    author: 'amfoss',
    siteUrl: 'https://amfoss.in/',
  },
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
