const gulp = require('gulp');
const postcss = require('gulp-postcss');
const path = require('path');
const csscomb = require('gulp-csscomb');
const browserSync = require('browser-sync').get('main');
const stylelint = require('gulp-stylelint');
const plumber = require('gulp-plumber');
const cssnano = require('gulp-cssnano');

const config = require('../../config');

gulp.task('styles:compile', () => {
    gulp.src(config.files.styles)
        .pipe(postcss())
        .pipe(plumber(config.onError))
        .pipe(gulp.dest(config.paths.styles.destDir))
        .pipe(browserSync.stream());
});

gulp.task('styles:cssnano', () => {
    gulp.src(path.join(config.paths.styles.destDir, '*.css'))
        .pipe(cssnano())
        .pipe(plumber(config.onError))
        .pipe(gulp.dest(config.paths.styles.destDir))
        .pipe(browserSync.stream());
});

gulp.task('styles:tidy', () => {
    gulp.src(path.join(config.paths.styles.destDir, '*.css'))
        .pipe(csscomb())
        .pipe(gulp.dest(config.paths.styles.destDir))
        .pipe(browserSync.stream());
});

gulp.task('styles:watch', () => {
    gulp.watch(path.join(config.paths.styles.srcDir, '**', '*.css'), ['styles:compile']);
});

gulp.task('styles:lint', () => {
    gulp.src(path.join(config.paths.styles.srcDir, '*.css'))
        .pipe(stylelint({
            reporters: [
                {
                    formatter: 'string',
                    console: true,
                },
            ],
        }));
});
