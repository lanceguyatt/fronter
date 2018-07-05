import webpackBase from './webpack.config';

module.exports = Object.assign({}, webpackBase, {
  mode: 'development',
  devtool: 'none',
  performance: {
    hints: 'error',
  },
});
