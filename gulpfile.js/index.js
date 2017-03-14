const gulp = require('gulp');

const server = require('./tasks/server');
const utils = require('./tasks/utils');
const styles = require('./tasks/styles');
const scripts = require('./tasks/scripts');
const templates = require('./tasks/templates');
const icons = require('./tasks/icons');

gulp.task('server:prestart', server.prestart);
gulp.task('server:start', server.start);

gulp.task('utils:clean', utils.clean);
gulp.task('utils:copy', utils.copy);

gulp.task('scripts:compile', scripts.compile);
gulp.task('scripts:lint', scripts.lint);
gulp.task('scripts:watch', scripts.watch);

gulp.task('styles:compile', styles.compile);
gulp.task('styles:lint', styles.lint);
gulp.task('styles:watch', styles.watch);

gulp.task('templates:compile', templates.compile);
gulp.task('templates:watch', templates.watch);

gulp.task('icons:compile', icons.compile);

gulp.task('build',
    gulp.series(
        utils.clean,
        utils.copy,
        gulp.parallel(
            scripts.compile,
            styles.compile,
            templates.compile,
            icons.compile)));

gulp.task('default',
    gulp.series(
        server.prestart,
        server.start,
        gulp.parallel(
            scripts.watch,
            styles.watch,
            templates.watch)));
