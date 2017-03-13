const gulp = require('gulp');
const clean = require('gulp-clean');
const { resolve } = require('path');

const { paths } = require('../../config');

const files = [
  paths.destDir,
];

const utils = {

  clean(done) {
    gulp.src(files, { read: false })
      .pipe(clean());

    return done();
  },
};

module.exports = utils;
