const { resolve } = require('path');
const browserSync = require('browser-sync').get('main');
const cssnano = require('gulp-cssnano');
const gulp = require('gulp');
const gutil = require('gulp-util');
const postcss = require('gulp-postcss');
const pump = require('pump');
const stylelint = require('gulp-stylelint');

const { prod, paths } = require('../../config');

const styles = {
  render(done) {
    pump(
      [
        gulp.src(resolve(paths.styles.srcDir, '*.css')),
        postcss(),
        prod ? cssnano() : gutil.noop(),
        gulp.dest(paths.styles.destDir),
        prod ? gutil.noop() : browserSync.stream(),
      ],
      done
    );
  },
  test(done) {
    pump(
      [
        gulp.src(resolve(paths.styles.srcDir, '*.css')),
        stylelint({
          reporters: [
            {
              formatter: 'string',
              console: true,
            }
          ]
        }),
      ],
      done
    );
  }
};

module.exports = styles;
