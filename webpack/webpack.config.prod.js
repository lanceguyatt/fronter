import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

import webpackBase from './webpack.config'

module.exports = Object.assign({}, webpackBase, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
        sourceMap: false,
      }),
    ],
  },
  // Turn off performance hints during development because we don't do any
  // splitting or minification in interest of speed. These warnings become
  // cumbersome.
  performance: {
    hints: false,
  },
})
