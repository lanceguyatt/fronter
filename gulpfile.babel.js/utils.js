import gulp from 'gulp';
import { resolve } from 'path';
import sitemap from 'gulp-sitemap';

import { paths } from '../config';

gulp.task('utils:sitemap', () => {
  gulp.src(resolve(paths.buildDir, '**', '**', '**', '**', '*.html'), {
    read: false,
  }).pipe(sitemap({
    siteUrl: 'http://fronter.surge.sh',
  }))
    .pipe(gulp.dest(paths.buildDir));
});
