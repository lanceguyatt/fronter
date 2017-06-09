import gulp from 'gulp';
import postcss from 'gulp-postcss';
import { resolve } from 'path';
import csscomb from 'gulp-csscomb';
import browserSync from 'browser-sync';
import stylelint from 'gulp-stylelint';
import plumber from 'gulp-plumber';
import cssnano from 'gulp-cssnano';
import sourcemaps from 'gulp-sourcemaps';

const bs = browserSync.get('main');

const config = require('../../config');

gulp.task('styles:compile', () => {
  gulp.src(config.files.styles)
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(plumber(config.onError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.paths.styles.destDir))
    .pipe(bs.stream());
});

gulp.task('styles:cssnano', () => {
  gulp.src(resolve(config.paths.styles.destDir, '*.css'))
    .pipe(cssnano())
    .pipe(plumber(config.onError))
    .pipe(gulp.dest(config.paths.styles.destDir));
});

gulp.task('styles:tidy', () => {
  gulp.src(resolve(config.paths.styles.destDir, '*.css'))
    .pipe(csscomb())
    .pipe(gulp.dest(config.paths.styles.destDir));
});

gulp.task('styles:watch', () => {
  gulp.watch(resolve(config.paths.styles.srcDir, '**', '*.css'), ['styles:compile']);
});

gulp.task('styles:lint', () => {
  gulp.src(resolve(config.paths.styles.srcDir, '*.css'))
    .pipe(stylelint({
      reporters: [
        {
          formatter: 'string',
          console: true,
        },
      ],
    }));
});
