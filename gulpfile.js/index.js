const gulp = require('gulp');

const { nodemon, browserSync, watch } = require('./tasks/serve');
const { clean, copy } = require('./tasks/utils');
const { scripts } = require('./tasks/scripts');
const { styles } = require('./tasks/styles');
const { templates } = require('./tasks/templates');
const { svgmin, svgstore } = require('./tasks/images');
const tests = require('./tasks/tests');

gulp.task('clean', clean);
gulp.task('copy', copy);
gulp.task('scripts', scripts);
gulp.task('styles', styles);
gulp.task('templates', templates);
gulp.task('svgmin', svgmin, svgmin);
gulp.task('svgstore', svgstore, svgstore);

const build = [
  clean,
  copy,
  templates,
  styles,
  scripts,
  svgmin,
  svgstore,
];

const dev = [
  templates,
  styles,
  scripts,
  nodemon,
  browserSync,
  watch,
];

gulp.task('build', gulp.series(build));
gulp.task('default', gulp.series(dev));

gulp.task('test:scripts', tests.scripts);
gulp.task('test:styles', tests.styles);
gulp.task('test:templates', tests.templates);
