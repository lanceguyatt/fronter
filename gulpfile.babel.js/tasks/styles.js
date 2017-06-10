import gulp from 'gulp';
import postcss from 'gulp-postcss';
import { resolve } from 'path';
import csscomb from 'gulp-csscomb';
import browserSync from 'browser-sync';
import stylelint from 'gulp-stylelint';
import plumber from 'gulp-plumber';
import cssnano from 'gulp-cssnano';
import sourcemaps from 'gulp-sourcemaps';

const { paths, onError } = require('../../config');

const bs = browserSync.get('main');

gulp.task('styles:compile', () => {
  gulp.src(resolve(paths.styles.srcDir, '*.css'))
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(plumber(onError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.destDir))
    .pipe(bs.stream());
});

gulp.task('styles:cssnano', () => {
  gulp.src(resolve(paths.styles.destDir, '*.css'))
    .pipe(cssnano())
    .pipe(plumber(onError))
    .pipe(gulp.dest(paths.styles.destDir));
});

gulp.task('styles:tidy', () => {
  gulp.src(resolve(paths.styles.destDir, '*.css'))
    .pipe(csscomb())
    .pipe(gulp.dest(paths.styles.destDir));
});

gulp.task('styles:watch', () => {
  gulp.watch(resolve(paths.styles.srcDir, '**', '*.css'), ['styles:compile']);
});

gulp.task('styles:lint', () => {
  gulp.src(resolve(paths.styles.srcDir, '*.css'))
    .pipe(stylelint({
      reporters: [
        {
          formatter: 'string',
          console: true,
        },
      ],
    }));
});
