const browserSync = require('browser-sync').get('main');
const changed = require('gulp-changed');
const gulp = require('gulp');
const gutil = require('gulp-util');
const htmlhint = require('gulp-htmlhint');
const path = require('path');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const puglint = require('gulp-pug-lint');

const data = require('../../data/index');
const config = require('../../config');

gulp.task('templates:compile', () => {
    gulp.src(path.join(config.paths.templates.srcDir, 'views', '**', '*.pug'))
        .pipe(config.prod ? gutil.noop() : changed(config.paths.destDir, { extension: '.html' }))
        .pipe(plumber(config.onError))
        .pipe(pug({
            locals: data,
            pretty: true,
        }))
        .pipe(gulp.dest(config.paths.templates.destDir))
        .pipe(browserSync.stream());
});

gulp.task('templates:watch', () => {
    gulp.watch(path.join(config.paths.templates.srcDir, '**', '*.pug'), ['templates:compile']);
});

gulp.task('templates:lint:pug', () => {
    gulp.src(path.join(config.paths.templates.srcDir, '**', '*.pug'))
        .pipe(puglint())
        .pipe(plumber(config.onError));
});

gulp.task('templates:lint:html', () => {
    gulp.src(path.join(config.paths.destDir, '**', '*.html'))
        .pipe(htmlhint('.htmlhintrc'))
        .pipe(htmlhint.reporter())
        .pipe(plumber(config.onError));
});
