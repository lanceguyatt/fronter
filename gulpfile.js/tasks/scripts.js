const gulp = require('gulp');
const { resolve } = require('path');
const browserSync = require('browser-sync').get('main');
const gutil = require('gulp-util');

const { prod, paths } = require('../../config');

const scripts = {

  scripts(done) {
    gulp.src(resolve(paths.scripts.srcDir, '*.js'))
      .pipe(gulp.dest(paths.scripts.destDir))
      .pipe(prod ? gutil.noop() : browserSync.stream());

    return done();
  },
};

module.exports = scripts;
