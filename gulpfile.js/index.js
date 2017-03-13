/* eslint-disable comma-dangle */
const gulp = require('gulp');

const { nodemon, browserSync, watch } = require('./tasks/serve');
const { scripts } = require('./tasks/scripts');
const { styles } = require('./tasks/styles');
const { svgMin, svgStore } = require('./tasks/images');
const { templates, test } = require('./tasks/templates');
const { clean } = require('./tasks/utils');

gulp.task('icons', gulp.series(svgMin, svgStore));

gulp.task('test', test);

gulp.task('default',
  gulp.series(
    templates,
    styles,
    scripts,
    nodemon,
    browserSync,
    watch
  )
);

gulp.task('build',
  gulp.series(
    clean,
    templates,
    styles,
    scripts
  )
);
