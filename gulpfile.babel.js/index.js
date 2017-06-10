import gulp from 'gulp';
import runSequence from 'run-sequence';

require('./tasks/server');
require('./tasks/images');
require('./tasks/scripts');
require('./tasks/styles');
require('./tasks/templates');
require('./tasks/utils');

gulp.task('default', () => {
  runSequence(
    'server:start',
    'server:poststart',
    'scripts:watch',
    'styles:watch',
    'templates:watch');
});

gulp.task('build', () => {
  runSequence(
    'utils:clean',
    'styles:compile',
    'templates:compile',
    'scripts:compile',
    'scripts:modernizr',
    'images:compile');
});
