const gulp = require('gulp');
const clean = require('gulp-clean');
const path = require('path');

const config = require('../../config');

const files = [
    // path.join(config.paths.destDir, '*.html'),
    path.join(config.paths.scripts.destDir, 'site.js'),
    path.join(config.paths.styles.destDir, '*.css'),
    // path.join(config.paths.images.destDir, 'icons'),
];

gulp.task('utils:clean', () => gulp.src(files, { read: false }).pipe(clean()));
