import browserSync from 'browser-sync';
import changed from 'gulp-changed';
import gulp from 'gulp';
import gutil from 'gulp-util';
import htmlhint from 'gulp-htmlhint';
import { resolve } from 'path';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import puglint from 'gulp-pug-lint';
import locals from '../../data/';

import { onError, paths, isProduction } from '../../config';

const bs = browserSync.get('main');

gulp.task('templates:compile', () => {
  gulp.src(resolve(paths.templates.srcDir, 'views', '**', '*.pug'))
    .pipe(isProduction ? gutil.noop() : changed(paths.destDir, { extension: '.html' }))
    .pipe(plumber(onError))
    .pipe(pug({
      locals,
      pretty: !isProduction,
    }))
    .pipe(gulp.dest(paths.templates.destDir))
    .pipe(bs.stream());
});

gulp.task('templates:watch', () => {
  gulp.watch(resolve(paths.templates.srcDir, '**', '*.pug'), ['templates:compile']);
});

gulp.task('templates:lint:pug', () => {
  gulp.src(resolve(paths.templates.srcDir, '**', '*.pug'))
    .pipe(puglint())
    .pipe(plumber(onError));
});

gulp.task('templates:lint:html', () => {
  gulp.src(resolve(paths.destDir, '**', '*.html'))
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter())
    .pipe(plumber(onError));
});
