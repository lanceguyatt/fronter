/* eslint-disable no-console */
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create('main');

const { port } = require('../../config');

const server = {
    prestart(done) {
        nodemon({
            ext: 'js json',
            watch: [
                'app.js',
                'config.js',
                'postcss.config.js',
                'data/**/*',
                'gulpfile.js/**/*',
                'webpack/**/*',
            ],
        });
        return done();
    },

    start(done) {
        browserSync.init(null, {
            open: false,
            notify: false,
            proxy: `http://localhost:${port}`,
        });
        return done();
    },
};

module.exports = server;
