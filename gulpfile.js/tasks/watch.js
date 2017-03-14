const gulp = require('gulp');
const { resolve } = require('path');

const { paths } = require('../../config');
const styles = require('./styles');
const scripts = require('./scripts');
const templates = require('./templates');

const watch = (done) => {
    gulp.watch(resolve(paths.scripts.srcDir, '**', '*.js'), scripts);
    gulp.watch(resolve(paths.styles.srcDir, '**', '*.css'), styles);
    gulp.watch(resolve(paths.templates.srcDir, '**', '*.pug'), templates);

    return done();
};

module.exports = watch;
