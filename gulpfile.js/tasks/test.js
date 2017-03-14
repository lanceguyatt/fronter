const gulp = require('gulp');
const eslint = require('gulp-eslint');
const stylelint = require('gulp-stylelint');
const htmlhint = require('gulp-htmlhint');
const { resolve } = require('path');

const { paths } = require('../../config');

const test = {
    scripts() {
        return gulp.src(['**/*.js', '!./build/**', '!node_modules/**'])
            .pipe(eslint())
            // eslint.format() outputs the lint results to the console.
            // Alternatively use eslint.formatEach() (see Docs).
            .pipe(eslint.format())
            // To have the process exit with an error code (1) on
            // lint error, return the stream and pipe to failAfterError last.
            .pipe(eslint.failAfterError());
    },
    styles() {
        return gulp
            .src(resolve(paths.styles.srcDir, '**/*.css'))
            .pipe(stylelint({
                reporters: [
                    {
                        formatter: 'string',
                        console: true,
                    },
                ],
            }));
    },
    templates() {
        return gulp
            .src(resolve(paths.destDir, '**/*.html'))
            .pipe(htmlhint())
            .pipe(htmlhint.reporter());
    },
};

module.exports = test;
