import gulp from 'gulp';

import watch from './watch/';
import images from './images/';
import scripts from './scripts/';
import styles from './styles/';
import templates from './templates/';

const start = gulp.series(
  watch);

const build = gulp.parallel(
  scripts,
  styles,
  templates);

export { watch, build, images, scripts, styles, templates };

export default start;
