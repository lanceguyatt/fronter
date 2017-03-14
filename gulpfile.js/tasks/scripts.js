/* eslint-disable import/no-dynamic-require, no-console */
const gulp = require('gulp');
const webpack = require('webpack');
const eslint = require('gulp-eslint');
const { resolve } = require('path');

const { isProduction, paths } = require('../../config');

const webpackConfig = require(`../../webpack/webpack.config.${isProduction ? 'prod' : 'dev'}`);

const scripts = {
    compile(done) {
        return webpack(webpackConfig).run((err) => {
            if (err) {
                console.error(err);
                if (err.details) {
                    console.error(err.details);
                }
                return;
            }
            done();
        });
    },

    lint(done) {
        gulp.src(['**/*.js', '!./build/**', '!node_modules/**'])
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
        return done();
    },

    watch(done) {
        gulp.watch(resolve(paths.scripts.srcDir, '**', '*.js'), scripts.compile);
        return done();
    },
};

module.exports = scripts;
