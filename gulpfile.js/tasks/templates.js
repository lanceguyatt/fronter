const { resolve } = require('path');
const browserSync = require('browser-sync').get('main');
const changed = require('gulp-changed');
const gulp = require('gulp');
const gutil = require('gulp-util');
const pug = require('gulp-pug');
const pump = require('pump');

const { prod, paths } = require('../../config');
const locals = require('../../data/index.json');

const templates = {
  templates(done) {
    pump(
      [
        gulp.src(resolve(paths.templates.srcDir, 'views', '**', '*.pug')),
        pug({ locals, pretty: prod ? false : true }),
        prod ? gutil.noop() : changed(paths.destDir, { extension: '.html' }),
        gulp.dest(paths.templates.destDir),
        prod ? gutil.noop() : browserSync.stream(),
      ],
      done
    );
  },
};

module.exports = templates;
