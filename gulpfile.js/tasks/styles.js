const { resolve } = require('path');
const browserSync = require('browser-sync').get('main');
const cssnano = require('gulp-cssnano');
const gulp = require('gulp');
const gutil = require('gulp-util');
const postcss = require('gulp-postcss');
const pump = require('pump');

const { isProduction, paths } = require('../../config');

const styles = {
  styles(done) {
    pump([
      gulp.src(resolve(paths.styles.srcDir, '*.css')),
      postcss(),
      isProduction ? cssnano() : gutil.noop(),
      gulp.dest(paths.styles.destDir),
      isProduction ? gutil.noop() : browserSync.stream(),
    ], done());
  },
};

module.exports = styles;
