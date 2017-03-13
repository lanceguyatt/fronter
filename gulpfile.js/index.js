const del = require('del');
const gulp = require('gulp');
const path = require('path');
const pump = require('pump');

const { paths } = require('../config');

const serve = require('./tasks/serve');
const scripts = require('./tasks/scripts');
const styles = require('./tasks/styles');
const templates = require('./tasks/templates');
const images = require('./tasks/images');

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

const clean = (done) => {
  del(path.resolve(paths.destDir));
  return done();
};

const copy = (done) => {
  pump(
    [
      gulp.src(copyFiles),
      gulp.dest(paths.destDir),
    ],
    done
  );
};

gulp.task('clean', clean);
gulp.task('copy', copy);

gulp.task('test:scripts', scripts.test);
gulp.task('test:styles', styles.test);
gulp.task('test:templates', templates.test);

gulp.task('scripts', scripts.render);

gulp.task('icons', gulp.series(images.svgMin, images.svgStore));

gulp.task('build',
  gulp.series(
    copy,
    'icons',
    templates.render,
    styles.render,
    scripts.render
  )
);

gulp.task('default',
  gulp.series(
    copy,
    templates.render,
    styles.render,
    scripts.render,
    serve.nodemon,
    serve.browserSync,
    serve.watch
  )
);
