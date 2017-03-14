const del = require('del');
const gulp = require('gulp');
const pump = require('pump');

const { paths } = require('../../config');

const copyFiles = [
  './src/public/android-chrome-192x192.png',
  './src/public/android-chrome-512x512.png',
  './src/public/apple-touch-icon.png',
  './src/public/browserconfig.xml',
  './src/public/favicon-16x16.png',
  './src/public/favicon-32x32.png',
  './src/public/favicon.ico',
  './src/public/manifest.json',
  './src/public/mstile-150x150.png',
];

const utils = {
  clean(done) {
    del(paths.destDir);
    done();
  },

  copy(done) {
    pump(
      [
        gulp.src(copyFiles),
        gulp.dest(paths.destDir),
      ],
      done
    );
  },
};

module.exports = utils;
