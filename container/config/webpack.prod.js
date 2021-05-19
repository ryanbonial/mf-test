const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const marketingDomain = process.env.PROD_MARKETING_DOMAIN;
const authDomain = process.env.PROD_AUTH_DOMAIN;
const dashboardDomain = process.env.PROD_DASHBOARD_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${marketingDomain}/remoteEntry.js`,
        auth: `auth@${authDomain}/remoteEntry.js`,
        dashboard: `dashboard@${dashboardDomain}/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
