/* eslint-disable comma-dangle */
const { resolve } = require('path');
const browserSync = require('browser-sync').get('main');
const changed = require('gulp-changed');
const gulp = require('gulp');
const gutil = require('gulp-util');
const htmlhint = require('gulp-htmlhint');
const pug = require('gulp-pug');
const pump = require('pump');

const { prod, paths } = require('../../config');
const locals = require('../../data/index.json');

const files = [
  resolve(paths.templates.srcDir, 'views', '**', '*.pug'),
];

const templates = {
  templates(done) {
    pump(
      [
        gulp.src(files),
        pug({ locals, pretty: true, }),
        prod ? gutil.noop() : changed(paths.destDir, { extension: '.html', }),
        gulp.dest(paths.templates.destDir),
        prod ? gutil.noop() : browserSync.stream(),
      ],
      done
    );
  },

  test(done) {
    pump(
      [
        gulp.src(resolve(paths.destDir, '*.html')),
        htmlhint('.htmlhintrc'),
        htmlhint.reporter(),
      ],
      done
    );
  },
};

module.exports = templates;
