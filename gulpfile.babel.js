import { resolve } from 'path';
import changed from 'gulp-changed';
import cssnano from 'gulp-cssnano';
import del from 'del';
import gulp from 'gulp';
import gutil from 'gulp-util';
import nodemon from 'gulp-nodemon';
import postcss from 'gulp-postcss';
import pug from 'gulp-pug';
import rename from 'gulp-rename';
import svgmin from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import uglify from 'gulp-uglify';

const browserSync = require('browser-sync').create('main');

const { isProduction, paths, port } = require('./config');
const locals = require('./data/index.json');

const copy = (done) => {
  const files = [
    resolve(paths.public.srcDir, 'android-chrome-192x192.png'),
    resolve(paths.public.srcDir, 'android-chrome-512x512.png'),
    resolve(paths.public.srcDir, 'apple-touch-icon.png'),
    resolve(paths.public.srcDir, 'browserconfig.xml'),
    resolve(paths.public.srcDir, 'favicon-16x16.png'),
    resolve(paths.public.srcDir, 'favicon-32x32.png'),
    resolve(paths.public.srcDir, 'favicon.ico'),
    resolve(paths.public.srcDir, 'manifest.json'),
    resolve(paths.public.srcDir, 'mstile-150x150.png'),
  ];

  gulp.src(files)
    .pipe(gulp.dest(paths.destDir));

  return done();
};

const clean = (done) => {
  del(paths.destDir);

  return done();
};

const nm = (done) => {
  let started = false;

  nodemon({ ext: 'js json', ignore: ['node_modules'] })
    .on('restart', () => console.log('Nodemon restarted'))
    .on('start', () => {
      if (!started) {
        console.log('Nodemon started');
        started = true;
      }
    });

  return done();
};

const bs = (done) => {
  browserSync.init(null, {
    open: false,
    notify: false,
    proxy: `http://localhost:${port}`,
  });

  return done();
};

const iconsMin = (done) => {
  const files = resolve(paths.images.srcDir, 'icons', '*.svg');

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
};

const iconsStore = (done) => {
  const files = resolve(paths.images.srcDir, 'icons', '*.svg');

  gulp.src(files)
    .pipe(rename({ prefix: 'i-' }))
    .pipe(svgstore())
    .pipe(gulp.dest(resolve(paths.images.destDir)));

  return done();
};

const templates = (done) => {
  const files = resolve(paths.templates.srcDir, 'views', '**', '*.pug');

  gulp.src(files)
    .pipe(pug({ locals }))
    .pipe(isProduction ? gutil.noop() : changed(paths.destDir, { extension: '.html' }))
    .pipe(gulp.dest(paths.templates.destDir))
    .pipe(isProduction ? gutil.noop() : browserSync.stream());

  return done();
};

const styles = (done) => {
  const files = resolve(paths.styles.srcDir, '*.css');

  gulp.src(files)
    .pipe(postcss())
    .pipe(isProduction ? cssnano() : gutil.noop())
    .pipe(gulp.dest(paths.styles.destDir))
    .pipe(isProduction ? gutil.noop() : browserSync.stream());

  return done();
};

const scripts = (done) => {
  const files = resolve(paths.scripts.srcDir, '*.js');

  gulp.src(files)
    .pipe(isProduction ? uglify() : gutil.noop())
    .pipe(gulp.dest(paths.scripts.destDir))
    .pipe(isProduction ? gutil.noop() : browserSync.stream());

  return done();
};

const watch = (done) => {
  gulp.watch(resolve(paths.scripts.srcDir, '**', '*.js'), scripts);
  gulp.watch(resolve(paths.styles.srcDir, '**', '*.css'), styles);
  gulp.watch(resolve(paths.templates.srcDir, '**', '*.pug'), templates);

  return done();
};

gulp.task('clean', clean);
gulp.task('copy', copy);
gulp.task('styles', styles);
gulp.task('templates', templates);
gulp.task('scripts', scripts);
gulp.task('icons', gulp.series(iconsMin, iconsStore));
gulp.task('build', gulp.series(clean, copy, gulp.parallel(styles, scripts, templates, 'icons')));
gulp.task('default', gulp.series(nm, bs, watch));
