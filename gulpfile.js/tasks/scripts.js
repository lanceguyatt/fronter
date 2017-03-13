const { resolve } = require('path');
const browserSync = require('browser-sync').get('main');
const gulp = require('gulp');
const gutil = require('gulp-util');
const uglify = require('gulp-uglify');
const pump = require('pump');
const eslint = require('gulp-eslint');

const { prod, paths } = require('../../config');

const scripts = {
  render(done) {
    pump(
      [
        gulp.src(resolve(paths.scripts.srcDir, '*.js')),
        prod ? uglify() : gutil.noop(),
        gulp.dest(paths.scripts.destDir),
        prod ? gutil.noop() : browserSync.stream(),
      ],
      done()
    );
  },
  test(done) {
    pump(
      [
        gulp.src([
          resolve('**', '*.js'),
          '!node_modules/**']
        ),
        eslint(),
        eslint.format(),
      ],
      done
    );
  },
};

module.exports = scripts;
