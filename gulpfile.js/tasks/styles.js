const browserSync = require('browser-sync').get('main');
const gutil = require('gulp-util');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const cssnano = require('gulp-cssnano');

const { prod, files, paths, onError } = require('../../config');

const styles = {

  styles(done) {
    gulp.src(files.styles)
      .pipe(postcss())
      .pipe(prod ? cssnano() : gutil.noop())
      .pipe(plumber(onError))
      .pipe(gulp.dest(paths.styles.destDir))
      .pipe(prod ? gutil.noop() : browserSync.stream());

    return done();
  },
};

module.exports = styles;
