const gulp = require('gulp');
const clean = require('gulp-clean');
const { resolve } = require('path');

const { paths } = require('../../config');

const files = [
  resolve(paths.destDir, '*.html'),
  resolve(paths.scripts.destDir, '*.js'),
  resolve(paths.styles.destDir, '*.css'),
];

const utils = {

  clean(done) {
    gulp.src(files, { read: false })
      .pipe(clean());

    return done();
  },
};

module.exports = utils;
