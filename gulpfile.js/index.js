/* eslint-disable comma-dangle */
const gulp = require('gulp');

const { nodemon, browserSync, watch } = require('./tasks/serve');
const { scripts } = require('./tasks/scripts');
const { styles } = require('./tasks/styles');
const { svgMin, svgStore } = require('./tasks/images');
const { templates, test } = require('./tasks/templates');

const { paths } = require('../config');

const sourceFiles = [
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

const foo = {
  bar(done) {
    gulp.src(sourceFiles)
      .pipe(gulp.dest(paths.destDir));
    return done();
  },
};

gulp.task('copy',
  gulp.series(foo.bar)
);

gulp.task('scripts',
  gulp.series(scripts)
);

gulp.task('icons',
  gulp.series(
    svgMin,
    svgStore
  )
);

gulp.task('test',
  gulp.series(
    test
  )
);

gulp.task('default',
  gulp.series(
    templates,
    styles,
    scripts,
    nodemon,
    browserSync,
    watch
  )
);

gulp.task('build',
  gulp.series(
    'copy',
    'icons',
    templates,
    styles,
    scripts
  )
);
