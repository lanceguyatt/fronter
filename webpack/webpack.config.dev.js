import webpack from 'webpack';
import webpackBase from './webpack.config';

module.exports = Object.assign({}, webpackBase, {
  devtool: 'inline-source-map',

  plugins: webpackBase.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ]),

  performance: {
    hints: false,
  },
});
