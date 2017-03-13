const gulp = require('gulp');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const rename = require('gulp-rename');
const { resolve } = require('path');

const { paths } = require('../../config');

const files = [
  resolve(paths.images.srcDir, '*.svg'),
];

const images = {

  svgMin(done) {
    gulp.src(files)
      .pipe(svgmin({
        plugins: [
          {
            mergePaths: true,
          }, {
            convertColors: {
              currentColor: true,
            },
          },
        ],
      }))
      .pipe(gulp.dest(resolve(paths.images.srcDir, 'icons')));

    return done();
  },

  svgStore(done) {
    gulp.src(files)
      .pipe(rename({ prefix: 'i-' }))
      .pipe(svgstore())
      .pipe(gulp.dest(resolve(paths.images.destDir, 'icons')));

    return done();
  },
};

module.exports = images;
