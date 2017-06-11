import { resolve } from 'path';

import { paths } from '../config';

const webpackBase = {
  entry: {
    site: [
      resolve(paths.scripts.srcDir, 'site.js'),
    ],
  },

  output: {
    path: paths.scripts.destDir,
    filename: '[name].js',
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
    chunks: false,
    hash: false,
    colors: true,
    reasons: false,
    version: false,
  },

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};

export default webpackBase;
