import browserSync from 'browser-sync';
import changed from 'gulp-changed';
import gulp from 'gulp';
import gutil from 'gulp-util';
import { resolve } from 'path';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import locals from '../../data/';

import { onError, paths, isProduction } from '../../config';

const bs = browserSync.get('main');

const templates = () => (
  gulp.src(resolve(paths.templates.srcDir, 'views', '**', '*.pug'))
    .pipe(isProduction ? gutil.noop() : changed(paths.destDir, { extension: '.html' }))
    .pipe(plumber(onError))
    .pipe(pug({
      locals,
      pretty: !isProduction,
    }))
    .pipe(gulp.dest(paths.templates.destDir))
    .pipe(bs.stream()));

export default templates;
