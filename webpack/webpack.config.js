import { resolve } from 'path';

import { paths } from '../config';

module.exports = {
  entry: {
    site: [
      resolve(paths.scripts.srcDir, 'site.js'),
    ],
  },

  output: {
    path: paths.scripts.destDir,
  },

  plugins: [],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: [/node_modules/],
      },
    ],
  },

  stats: {
    // Add chunk information (setting this to `false` allows for a less verbose output)
    chunks: false,
    // Add the hash of the compilation
    hash: false,
    // `webpack --colors` equivalent
    colors: true,
    // Add information about the reasons why modules are included
    reasons: false,
    // Add webpack version information
    version: false,
  },

  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
