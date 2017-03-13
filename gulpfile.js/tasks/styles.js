/* eslint-disable comma-dangle */
const { resolve } = require('path');
const browserSync = require('browser-sync').get('main');
const cssnano = require('gulp-cssnano');
const gulp = require('gulp');
const gutil = require('gulp-util');
const postcss = require('gulp-postcss');
const pump = require('pump');

const { prod, paths } = require('../../config');

const styles = {
  styles(done) {
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
};

module.exports = styles;
