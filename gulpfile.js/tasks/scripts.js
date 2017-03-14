const { resolve } = require('path');
const browserSync = require('browser-sync').get('main');
const gulp = require('gulp');
const gutil = require('gulp-util');
const pump = require('pump');
const uglify = require('gulp-uglify');

const { isProduction, paths } = require('../../config');

const scripts = {
  scripts(done) {
    pump([
      gulp.src(resolve(paths.scripts.srcDir, '*.js')),
      isProduction ? uglify() : gutil.noop(),
      gulp.dest(paths.scripts.destDir),
      isProduction ? gutil.noop() : browserSync.stream(),
    ], done());
  },
};

module.exports = scripts;
