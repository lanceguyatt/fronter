const browserSync = require('browser-sync').create('main');

const { port } = require('../../config');

const bs = (done) => {
    browserSync
        .init(null, {
            open: false,
            notify: false,
            proxy: `http://localhost:${port}`,
        });

    return done();
};

module.exports = bs;
