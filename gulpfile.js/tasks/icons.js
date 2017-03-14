const { paths, isProduction } = require('../../config');
const gulp = require('gulp');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const path = require('path');
const size = require('gulp-size');
const rename = require('gulp-rename');

const icons = {
    compile(done) {
        gulp.src(path.join(paths.images.srcDir, '**', '*.svg'))
            .pipe(rename({ prefix: 'i-' }))
            .pipe(svgmin())
            .pipe(svgstore())
            .pipe(rename('icons.svg'))
            .pipe(size({ title: 'SVG', gzip: isProduction }))
            .pipe(gulp.dest(paths.images.destDir));
        return done();
    },
};

module.exports = icons;
