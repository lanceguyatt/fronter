const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssnano = require('gulp-cssnano');
const stylelint = require('gulp-stylelint');
const gutil = require('gulp-util');
const browserSync = require('browser-sync').get('main');
const { resolve } = require('path');

const { isProduction, paths } = require('../../config');

const styles = {
    compile(done) {
        gulp.src(resolve(paths.styles.srcDir, '*.css'))
            .pipe(postcss())
            .pipe(isProduction ? cssnano() : gutil.noop())
            .pipe(gulp.dest(paths.styles.destDir))
            .pipe(isProduction ? gutil.noop() : browserSync.stream());
        return done();
    },

    watch(done) {
        gulp.watch(resolve(paths.styles.srcDir, '**', '*.css'), styles.compile);
        return done();
    },

    lint(done) {
        gulp.src(resolve(paths.styles.srcDir, '**', '*.css'))
            .pipe(stylelint({
                reporters: [
                    {
                        formatter: 'string',
                        console: true,
                    },
                ],
            }));
        return done();
    },
};

module.exports = styles;
