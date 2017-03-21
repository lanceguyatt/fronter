/* eslint import/no-dynamic-require: 0 */
const gulp = require('gulp');
const path = require('path');
const modernizr = require('gulp-modernizr');
const webpack = require('webpack');
const eslint = require('gulp-eslint');
const browserSync = require('browser-sync').get('main');

const config = require('../../config');

const webpackConfig = require(`../../webpack/webpack.config.${config.prod ? 'prod' : 'dev'}`);

gulp.task('scripts:compile', () => {
    webpack(webpackConfig).run((err) => {
        if (err) {
            console.error(err);
            if (err.details) {
                console.error(err.details);
            }
        }
    });
});

gulp.task('scripts:watch', () => {
    gulp.watch(path.join(config.paths.scripts.srcDir, '**', '*.js'), ['scripts:compile'])
        .on('change', browserSync.reload);
});

gulp.task('scripts:lint', () => {
    gulp.src(['**/*.js'])
       .pipe(eslint())
       .pipe(eslint.format())
       .pipe(eslint.failAfterError());
});

gulp.task('scripts:modernizr', () => {
    const files = [
        path.join(config.paths.scripts.destDir, 'site.js'),
        path.join(config.paths.styles.destDir, 'site.css'),
    ];

    gulp.src(files)
        .pipe(modernizr({
            options: [
                'setClasses',
            ],
        }))
        .pipe(gulp.dest(path.join(config.paths.scripts.destDir, 'vendor')));
});
