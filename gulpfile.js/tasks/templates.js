const gulp = require('gulp');
const pug = require('gulp-pug');
const { resolve } = require('path');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const gutil = require('gulp-util');
const htmlhint = require('gulp-htmlhint');
const browserSync = require('browser-sync').get('main');

const { paths, onError, prod } = require('../../config');
const locals = require('../../data/index.json');

const files = [
  resolve(paths.templates.srcDir, 'views', '**', '*.pug'),
];

const templates = {
  templates(done) {
    gulp.src(files)
      .pipe(pug({
        locals,
        pretty: true,
      }))
      .pipe(prod ? gutil.noop() : changed(paths.destDir, {
        extension: '.html',
      }))
      .pipe(plumber(onError))
      .pipe(gulp.dest(paths.templates.destDir))
      .pipe(prod ? gutil.noop() : browserSync.stream());

    return done();
  },

  test(done) {
    gulp.src(resolve(paths.destDir, '*.html'))
      .pipe(htmlhint('.htmlhintrc'))
      .pipe(htmlhint.reporter());

    return done();
  },
};

module.exports = templates;
