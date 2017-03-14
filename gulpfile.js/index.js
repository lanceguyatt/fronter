const gulp = require('gulp');

const nm = require('./tasks/nodemon');
const bs = require('./tasks/browser-sync');
const watch = require('./tasks/watch');

const clean = require('./tasks/clean');
const copy = require('./tasks/copy');

const styles = require('./tasks/styles');
const scripts = require('./tasks/scripts');
const templates = require('./tasks/templates');
const svg = require('./tasks/svg');

const test = require('./tasks/test');

gulp.task('clean', clean);
gulp.task('copy', copy);

gulp.task('scripts', scripts);
gulp.task('styles', styles);
gulp.task('templates', templates);
gulp.task('svg', svg);

gulp.task('build', gulp.series(clean, copy, gulp.parallel(scripts, styles, templates, svg)));

gulp.task('default', gulp.series(nm, bs, watch));

gulp.task('test:scripts', test.scripts);
gulp.task('test:styles', test.styles);
gulp.task('test:templates', test.templates);
