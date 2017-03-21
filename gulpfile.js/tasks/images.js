const gulp = require('gulp');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const path = require('path');
const size = require('gulp-size');
const rename = require('gulp-rename');

const { paths, prod } = require('../../config');

gulp.task('images:compile', () => {
    gulp.src(path.join(paths.images.srcDir, 'icons', '*.svg'))
        .pipe(rename({ prefix: 'i-' }))
        .pipe(svgmin())
        .pipe(svgstore())
        .pipe(rename('icons.svg'))
        .pipe(size({ title: 'SVG', gzip: prod }))
        .pipe(gulp.dest(paths.images.destDir));
});
