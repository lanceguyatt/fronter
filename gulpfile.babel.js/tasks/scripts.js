/* eslint import/no-dynamic-require: 0 */
import gulp from 'gulp';
import { resolve } from 'path';
import modernizr from 'gulp-modernizr';
import webpack from 'webpack';
import eslint from 'gulp-eslint';
import browserSync from 'browser-sync';
import { paths, prod } from '../../config';

const webpackConfig = require(`../../webpack/webpack.config.${prod ? 'prod' : 'dev'}`);

const bs = browserSync.get('main');

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
  gulp.watch(resolve(paths.scripts.srcDir, '**', '*.js'), ['scripts:compile'])
    .on('change', bs.reload);
});

gulp.task('scripts:lint', () => {
  gulp.src(['**/*.js'])
   .pipe(eslint())
   .pipe(eslint.format())
   .pipe(eslint.failAfterError());
});

gulp.task('scripts:modernizr', () => {
  const files = [
    resolve(paths.scripts.destDir, 'site.js'),
    resolve(paths.styles.destDir, 'site.css'),
  ];

  gulp.src(files)
    .pipe(modernizr({
      options: [
        'setClasses',
      ],
    }))
    .pipe(gulp.dest(resolve(paths.scripts.destDir, 'vendor')));
});
