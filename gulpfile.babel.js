/* eslint import/no-dynamic-require: 0 */
import gulp from 'gulp';
import webpack from 'webpack';
import { resolve } from 'path';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import changed from 'gulp-changed';
import gutil from 'gulp-util';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import svgstore from 'gulp-svgstore';
import svgmin from 'gulp-svgmin';
import size from 'gulp-size';
import rename from 'gulp-rename';
import gulpStylelint from 'gulp-stylelint';
import eslint from 'gulp-eslint';
import puglint from 'gulp-pug-lint';
import htmlhint from 'gulp-htmlhint';

import { port, onError, paths, isProduction } from './config';
import locals from './data/';

const webpackConfig = require(`./webpack/webpack.config.${isProduction ? 'prod' : 'dev'}`);

const bs = browserSync.create('main');

gulp.task('serve', () => {
  bs.init(null, {
    open: false,
    notify: false,
    server: paths.buildDir,
    port,
  }, () => {
    webpack(webpackConfig).watch({}, (err, stats) => {
      const hasErrors = err || stats.hasErrors();
      if (err) {
        console.error(err.stack || err);

        if (err.details) {
          console.error(err.details);
        }

        bs.notify(err.message, 10000);
      } else {
        const info = stats.toJson();

        if (stats.hasErrors()) {
          bs.notify(info.errors[0].split('\n\n')[0], 10000);
        }

        if (stats.hasWarnings()) {
          bs.notify(info.warnings[0], 10000);
        }

        console.log(stats.toString(webpackConfig.stats));

        if (!hasErrors && bs.active) {
          bs.reload(resolve(webpackConfig.output.path, '**', '*.js'));
        }
      }
    });
  });

  gulp.watch(resolve(paths.styles.srcDir, '**', '*.css'), ['styles']);
  gulp.watch(resolve(paths.templates.srcDir, '**', '*.pug'), ['templates']);
});

gulp.task('js:compile', () => {
  webpack(webpackConfig).run((err) => {
    if (err) {
      console.error(err);
      if (err.details) {
        console.error(err.details);
      }
    }
  });
});

gulp.task('js:lint', () => {
  gulp.src(resolve(paths.scripts.buildDir, '**', '*.js'))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('pug:compile', () => {
  gulp.src(resolve(paths.templates.srcDir, 'views', '**', '*.pug'))
    .pipe(isProduction ? gutil.noop() : changed(paths.buildDir, { extension: '.html' }))
    .pipe(plumber(onError))
    .pipe(pug({
      locals,
      pretty: true,
    }))
    .pipe(gulp.dest(paths.templates.buildDir))
    .pipe(bs.stream());
});

gulp.task('pug:lint', () => {
  gulp.src(resolve(paths.templates.srcDir, '**', '*.pug'))
    .pipe(puglint());
});

gulp.task('html:lint', () => {
  gulp.src(resolve(paths.templates.buildDir, '**', '*.html'))
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter());
});

gulp.task('css:compile', () => {
  gulp.src(resolve(paths.styles.srcDir, '*.css'))
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(plumber(onError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.buildDir))
    .pipe(bs.stream());
});

gulp.task('css:lint', () => {
  gulp.src(resolve(paths.styles.buildDir, '*.css'))
    .pipe(gulpStylelint({
      reporters: [
        {
          formatter: 'string',
          console: true,
        },
      ],
    }));
});

gulp.task('svg:compile', () => {
  gulp.src(resolve(paths.images.srcDir, 'icons', '*.svg'))
    .pipe(rename({ prefix: 'i-' }))
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(rename('icons.svg'))
    .pipe(size({ title: 'SVG', gzip: isProduction }))
    .pipe(gulp.dest(paths.images.buildDir));
});

gulp.task('build', ['svg:compile', 'js:compile', 'css:compile', 'pug:compile']);

gulp.task('default', ['serve']);
