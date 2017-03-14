const del = require('del');
const gulp = require('gulp');
const { resolve } = require('path');

const { paths } = require('../../config');

const copyFiles = [
    resolve(paths.public.srcDir, 'android-chrome-192x192.png'),
    resolve(paths.public.srcDir, 'android-chrome-512x512.png'),
    resolve(paths.public.srcDir, 'apple-touch-icon.png'),
    resolve(paths.public.srcDir, 'browserconfig.xml'),
    resolve(paths.public.srcDir, 'favicon-16x16.png'),
    resolve(paths.public.srcDir, 'favicon-32x32.png'),
    resolve(paths.public.srcDir, 'favicon.ico'),
    resolve(paths.public.srcDir, 'manifest.json'),
    resolve(paths.public.srcDir, 'mstile-150x150.png'),
];

const utils = {
    clean(done) {
        del(paths.destDir);

        return done();
    },

    copy(done) {
        gulp.src(copyFiles)
            .pipe(gulp.dest(paths.destDir));

        return done();
    },
};

module.exports = utils;
