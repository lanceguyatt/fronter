import { resolve } from 'path';

import { paths } from '../config';

const webpackBase = {
  mode: 'development',
  entry: {
    site: [resolve(paths.scripts.srcDir, 'site.js')],
  },
  output: {
    filename: '[name].js',
    path: paths.scripts.buildDir,
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
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
