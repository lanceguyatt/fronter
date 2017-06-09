import gulp from 'gulp';
import browserSync from 'browser-sync';
import nodemon from 'gulp-nodemon';

const { port } = require('../../config');

const bs = browserSync.create('main');

gulp.task('server:start', () => {
  let started = false;

  nodemon({
    script: './app.js',
    ext: 'js json',
    watch: [
      'app.js',
      'config.js',
      'postcss.config.js',
      'data/**/*',
      'gulpfile.js/**/*',
      'webpack/**/*',
    ],
  }).on('start', () => {
    if (!started) {
      started = true;
    }
  });
});

gulp.task('server:poststart', () => {
  bs.init(null, {
    open: false,
    notify: false,
    proxy: `http://localhost:${port}`,
  });
});
