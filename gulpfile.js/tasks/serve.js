const { resolve } = require('path');
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create('main');

const { scripts } = require('./scripts');
const { styles } = require('./styles');
const { templates } = require('./templates');

const { paths, port, prod } = require('../../config');

const serve = {
  nodemon(done) {
    let started = false;
    return nodemon({
      script: './app.js',
      ext: 'js json',
      env: {
        NODE_ENV: prod,
      },
      ignore: [
        'node_modules',
      ],
    }).on('restart', function () {
      return console.log('Nodemon restarted!');
    }).on('start', function () {
      if (!started) {
        console.log('Nodemon started!');
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
    gulp.watch(resolve(paths.scripts.srcDir, '**', '*.js'), scripts);
    gulp.watch(resolve(paths.styles.srcDir, '**', '*.css'), styles);
    gulp.watch(resolve(paths.templates.srcDir, '**', '*.pug'), templates);
    return done();
  },
};

module.exports = serve;
