/* eslint-disable no-console */
const nodemon = require('gulp-nodemon');

const nm = (done) => {
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
};

module.exports = nm;
