/* eslint import/no-dynamic-require: 0, no-console: 0 */
import webpack from 'webpack'

import { isProduction } from '../../config'

const webpackConfig = require(`../../webpack/webpack.config.${
  isProduction ? 'prod' : 'dev'
}`)

const compile = done => {
  webpack(webpackConfig).run(err => {
    if (err) {
      console.error(err)
      if (err.details) {
        console.error(err.details)
      }
    }
  })
  done()
}

export default {
  compile,
}
