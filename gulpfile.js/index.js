require('dotenv').load();

const gulp = require('gulp');
const runSequence = require('run-sequence');

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
        'styles:tidy',
        'templates:compile',
        'scripts:compile',
        'scripts:modernizr',
        'images:compile');
});
