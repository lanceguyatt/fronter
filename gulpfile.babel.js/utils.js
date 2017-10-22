import gulp from 'gulp';
import { resolve } from 'path';
import sitemap from 'gulp-sitemap';

import { homepage } from '../package.json';
import { paths } from '../config';

gulp.task('utils:sitemap', () => {
  gulp.src(resolve(paths.buildDir, '**', '*.html'), {
    read: false,
  }).pipe(sitemap({
    siteUrl: homepage,
  }))
    .pipe(gulp.dest(paths.buildDir));
});
