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

import config from '../../config';

gulp.task('templates:compile', () => {
  gulp.src(resolve(config.paths.templates.srcDir, 'views', '**', '*.pug'))
    .pipe(config.prod ? gutil.noop() : changed(config.paths.destDir, { extension: '.html' }))
    .pipe(plumber(config.onError))
    .pipe(pug({
      locals,
      pretty: true,
    }))
    .pipe(gulp.dest(config.paths.templates.destDir))
    .pipe(browserSync.stream());
});

gulp.task('templates:watch', () => {
  gulp.watch(resolve(config.paths.templates.srcDir, '**', '*.pug'), ['templates:compile']);
});

gulp.task('templates:lint:pug', () => {
  gulp.src(resolve(config.paths.templates.srcDir, '**', '*.pug'))
    .pipe(puglint())
    .pipe(plumber(config.onError));
});

gulp.task('templates:lint:html', () => {
  gulp.src(resolve(config.paths.destDir, '**', '*.html'))
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter())
    .pipe(plumber(config.onError));
});
