const changed = require('gulp-changed');
const gulp = require('gulp');
const gutil = require('gulp-util');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').get('main');
const { resolve } = require('path');

const { isProduction, paths } = require('../../config');
const locals = require('../../data/index.json');

const templates = {
    compile(done) {
        gulp.src(resolve(paths.templates.srcDir, 'views', '**', '*.pug'))
            .pipe(pug({ locals }))
            .pipe(isProduction ? gutil.noop() : changed(paths.destDir, { extension: '.html' }))
            .pipe(gulp.dest(paths.templates.destDir))
            .pipe(isProduction ? gutil.noop() : browserSync.stream());

        return done();
    },

    watch(done) {
        gulp.watch(resolve(paths.templates.srcDir, '**', '*.pug'), templates.compile);
        return done();
    },
};

module.exports = templates;
