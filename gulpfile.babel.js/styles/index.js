import gulp from 'gulp';
import gutil from 'gulp-util';
import postcss from 'gulp-postcss';
import { resolve } from 'path';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import cssnano from 'gulp-cssnano';
import sourcemaps from 'gulp-sourcemaps';

import { paths, onError, isProduction } from '../../config';

const bs = browserSync.get('main');

const styles = () => (
  gulp.src(resolve(paths.styles.srcDir, '*.css'))
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(isProduction ? cssnano() : gutil.noop())
    .pipe(plumber(onError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.destDir))
    .pipe(bs.stream()));

export default styles;
