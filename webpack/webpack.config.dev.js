import webpackBase from './webpack.config';

module.exports = Object.assign({}, webpackBase, {
  mode: 'development',
  devtool: 'inline-source-map',
  performance: {
    hints: false,
  },
});
