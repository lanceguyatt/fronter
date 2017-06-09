import gulp from 'gulp';
import svgstore from 'gulp-svgstore';
import svgmin from 'gulp-svgmin';
import { resolve } from 'path';
import size from 'gulp-size';
import rename from 'gulp-rename';

import { paths, prod } from '../../config';

gulp.task('images:compile', () => {
  gulp.src(resolve(paths.images.srcDir, 'icons', '*.svg'))
    .pipe(rename({ prefix: 'i-' }))
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(rename('icons.svg'))
    .pipe(size({ title: 'SVG', gzip: prod }))
    .pipe(gulp.dest(paths.images.destDir));
});
