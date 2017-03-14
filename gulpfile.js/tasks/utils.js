const { resolve } = require('path');
const del = require('del');
const gulp = require('gulp');
const pump = require('pump');

const { paths } = require('../../config');

const files = [
  resolve(paths.srcDir, 'public', 'android-chrome-192x192.png'),
  resolve(paths.srcDir, 'public', 'android-chrome-512x512.png'),
  resolve(paths.srcDir, 'public', 'apple-touch-icon.png'),
  resolve(paths.srcDir, 'public', 'browserconfig.xml'),
  resolve(paths.srcDir, 'public', 'favicon-16x16.png'),
  resolve(paths.srcDir, 'public', 'favicon-32x32.png'),
  resolve(paths.srcDir, 'public', 'favicon.ico'),
  resolve(paths.srcDir, 'public', 'manifest.json'),
  resolve(paths.srcDir, 'public', 'mstile-150x150.png'),
];

const utils = {
  clean(done) {
    del(paths.destDir);
    done();
  },

  copy(done) {
    pump(
      [
        gulp.src(files),
        gulp.dest(paths.destDir),
      ],
      done
    );
  },
};

module.exports = utils;
