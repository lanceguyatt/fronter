const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create('main');
const path = require('path');

const { paths, port } = require('../../config');
// const scripts = require('./scripts');
const styles = require('./styles');
// const templates = require('./templates');

const serve = {

  nodemon(done) {
    let started = false;

    return nodemon({
      script: './app.js',
      ext: 'js json',
      ignore: [
        'node_modules',
      ],
    }).on('restart', function () {
      console.log('Nodemon restarted');
    }).on('start', function () {
      if (!started) {
        console.log('Nodemon started');
        console.log(paths);
        started = true;
        return done();
      }
    });
  },

  browserSync(done) {
    browserSync.init(null, {
      open: false,
      notify: false,
      proxy: `http://localhost:${port}`,
    });

    return done();
  },

  watch(done) {
    // gulp.watch(path.resolve(paths.scripts.srcDir, '**', '*.js'), scripts);
    gulp.watch(path.resolve(paths.styles.srcDir, '**', '*.css'), styles);
    // gulp.watch(path.resolve(paths.templates.srcDir, '**', '*.pug'), templates);
    return done();
  },
};

module.exports = serve;
