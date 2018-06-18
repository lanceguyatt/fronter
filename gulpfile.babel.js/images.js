import gulp from 'gulp';
import { resolve } from 'path';
import svgstore from 'gulp-svgstore';
import svgmin from 'gulp-svgmin';
import size from 'gulp-size';
import rename from 'gulp-rename';

import { paths, isProduction } from '../config';

gulp.task('svg:compile', () => {
  gulp
    .src(resolve(paths.images.srcDir, 'icons', '*.svg'))
    .pipe(rename({ prefix: 'i-' }))
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(rename('icons.svg'))
    .pipe(size({ title: 'SVG', gzip: isProduction }))
    .pipe(gulp.dest(paths.images.buildDir));
});
