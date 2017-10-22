import dotenv from 'dotenv';
import gulp from 'gulp';
import runSequence from 'run-sequence';

import './server';
import './images';
import './scripts';
import './styles';
import './templates';
import './utils';

dotenv.load();

gulp.task('default', () => {
  runSequence(
    'styles:compile',
    'server:start',
    'styles:watch',
    'templates:watch',
  );
});

gulp.task('build', () => {
  runSequence(
    'svg:compile',
    'scripts:compile',
    'styles:compile',
    'templates:compile',
    'utils:sitemap',
  );
});
