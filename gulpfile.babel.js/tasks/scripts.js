/* eslint import/no-dynamic-require: 0 */
import gulp from 'gulp';
import webpack from 'webpack';

import { isProduction } from '../../config';

const webpackConfig = require(`../../webpack/webpack.config.${isProduction ? 'prod' : 'dev'}`);

gulp.task('js:compile', () => {
  webpack(webpackConfig).run((err) => {
    if (err) {
      console.error(err);
      if (err.details) {
        console.error(err.details);
      }
    }
  });
});
