const del = require('del');
const gulp = require('gulp');
const path = require('path');
const pump = require('pump');

const { paths } = require('../config');

const { nodemon, browserSync, watch } = require('./tasks/serve');

const { clean, copy } = require('./tasks/utils');

const { scripts } = require('./tasks/scripts');
const { styles } = require('./tasks/styles');
const { templates } = require('./tasks/templates');
const { svgMin, svgStore }  = require('./tasks/images');

const tests = require('./tasks/tests');

gulp.task('clean', clean);
gulp.task('copy', copy);

gulp.task('scripts', scripts);
gulp.task('styles', styles);
gulp.task('templates', templates);
gulp.task('icons', gulp.series(svgMin, svgStore));

gulp.task('test:scripts', tests.scripts);
gulp.task('test:styles', tests.styles);
gulp.task('test:templates', tests.templates);

gulp.task('build',
  gulp.series(
    clean,
    copy,
    templates,
    styles,
    scripts,
    'icons'
  )
);

gulp.task('default',
  gulp.series(
    copy,
    templates,
    styles,
    scripts,
    nodemon,
    browserSync,
    watch
  )
);
