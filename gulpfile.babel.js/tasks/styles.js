import gulp from 'gulp'
import { resolve } from 'path'
import browserSync from 'browser-sync'
import plumber from 'gulp-plumber'
import postcss from 'gulp-postcss'
import sourcemaps from 'gulp-sourcemaps'
// import gulpStylelint from 'gulp-stylelint';
import cleanCSS from 'gulp-clean-css'
import gutil from 'gulp-util'

import { isProduction, onError, paths } from '../../config'

const bs = browserSync.get('main')

const compile = done => {
  gulp
    .src(resolve(paths.styles.srcDir, '*.css'))
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(isProduction ? cleanCSS() : gutil.noop())
    .pipe(plumber(onError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.buildDir))
    .pipe(bs.stream())
  done()
}

// gulp.task('styles:lint', () => {
//   gulp.src(resolve(paths.styles.buildDir, '*.css')).pipe(
//     gulpStylelint({
//       reporters: [
//         {
//           formatter: 'string',
//           console: true,
//         },
//       ],
//     }),
//   );
// });

const watch = done => {
  gulp.watch(resolve(paths.styles.srcDir, '**', '*.css'), compile)
  done()
}

export default {
  compile,
  watch,
}
