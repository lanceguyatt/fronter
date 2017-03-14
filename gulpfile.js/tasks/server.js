/* eslint-disable no-console */
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create('main');

const { port } = require('../../config');

const server = {
    prestart(done) {
        let started = false;
        nodemon({
            ext: 'js json',
            ignore: ['node_modules'],
        })
            .on('restart', () => console.log('Nodemon restarted'))
            .on('start', () => {
                if (!started) {
                    console.log('Nodemon started');
                    started = true;
                }
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
