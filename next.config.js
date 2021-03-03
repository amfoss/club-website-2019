module.exports = {
  target: 'serverless',
  devIndicators: {
    autoPrerender: false,
  },
  trailingSlash: true,
  productionBrowserSourceMaps: true,
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
