const { resolve } = require('path');
const browserSync = require('browser-sync').get('main');
const gulp = require('gulp');
const gutil = require('gulp-util');
const pump = require('pump');
const uglify = require('gulp-uglify');

const { prod, paths } = require('../../config');

const scripts = {
  scripts(done) {
    pump([
      gulp.src(resolve(paths.scripts.srcDir, '*.js')),
      prod ? uglify() : gutil.noop(),
      gulp.dest(paths.scripts.destDir),
      prod ? gutil.noop() : browserSync.stream(),
    ], done());
  },
};

module.exports = scripts;
