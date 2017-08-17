import dotenv from 'dotenv';
import gulp from 'gulp';
import runSequence from 'run-sequence';

import './tasks/server';
import './tasks/images';
import './tasks/scripts';
import './tasks/styles';
import './tasks/templates';

dotenv.load();

gulp.task('default', () => {
  runSequence(
    'server:start',
    'css:watch',
    'pug:watch');
});

gulp.task('build', () => {
  runSequence(
    'svg:compile',
    'js:compile',
    'css:compile',
    'pug:compile');
});
