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

const templates = {
  render(done) {
    pump(
      [
        gulp.src(resolve(paths.templates.srcDir, 'views', '**', '*.pug')),
        pug({ locals, pretty: !prod }),
        prod ? gutil.noop() : changed(paths.destDir, { extension: '.html' }),
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
        htmlhint.reporter(),
      ],
      done
    );
  },
};

module.exports = templates;
