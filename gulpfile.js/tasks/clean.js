const del = require('del');

const { paths } = require('../../config');

const clean = (done) => {
    del(paths.destDir);
    return done();
};

module.exports = clean;
