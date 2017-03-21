const config = require('../../config');

const gulp = require('gulp');
const browserSync = require('browser-sync').create('main');
const nodemon = require('gulp-nodemon');

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
    browserSync.init(null, {
        open: false,
        notify: false,
        proxy: `http://localhost:${config.port}`,
    });
});
