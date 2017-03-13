/* eslint-disable comma-dangle */
const { resolve } = require('path');
const gulp = require('gulp');
const pump = require('pump');
const rename = require('gulp-rename');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');

const { paths } = require('../../config');

const files = [
  resolve(paths.images.srcDir, '*.svg'),
];

const images = {
  svgMin(done) {
    pump(
      [
        gulp.src(files),
        svgmin({
          plugins: [
            {
              mergePaths: true,
            }, {
              convertColors: {
                currentColor: true,
              },
            },
          ],
        }),
        gulp.dest(resolve(paths.images.srcDir, 'icons')),
      ],
      done
    );
  },

  svgStore(done) {
    pump(
      [
        gulp.src(files),
        rename({ prefix: 'i-' }),
        svgstore(),
        gulp.dest(resolve(paths.images.destDir, 'icons')),
      ],
      done
    );
  },
};

module.exports = images;
