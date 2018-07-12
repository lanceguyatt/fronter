import gulp from 'gulp';

import server from './tasks/server';
import images from './tasks/images';
import scripts from './tasks/scripts';
import styles from './tasks/styles';
import templates from './tasks/templates';
import utils from './tasks/utils';
import test from './tasks/test';

gulp.task('server:start', server.start);

gulp.task('images:compile', images.compile);

gulp.task('scripts:compile', scripts.compile);

gulp.task('styles:compile', styles.compile);
gulp.task('styles:watch', styles.watch);

gulp.task('templates:compile', templates.compile);
gulp.task('templates:test', templates.test);
gulp.task('templates:watch', templates.watch);

gulp.task('utils:clean', utils.clean);
gulp.task('utils:copy', utils.copy);
gulp.task('utils:relative', utils.relative);
gulp.task('utils:sitemap', utils.sitemap);

gulp.task('test:css', test.css);
gulp.task('test:html', test.html);

const build = gulp.series(
  'utils:copy',
  'images:compile',
  'scripts:compile',
  'styles:compile',
  'templates:compile',
  'utils:sitemap',
);

export { build };

export default gulp.series(
  'styles:compile',
  'scripts:compile',
  'server:start',
  'styles:watch',
  'templates:watch',
);
