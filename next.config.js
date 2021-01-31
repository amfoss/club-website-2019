const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withSourceMaps = require('@zeit/next-source-maps');

const customConfig = {
  target: 'serverless',
  devIndicators: {
    autoPrerender: false,
  },
  trailingSlash: true,
  webpack(config, options) {
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
};

module.exports = withPlugins(
  [[withSourceMaps], [withCSS], [withSass]],
  customConfig
);
