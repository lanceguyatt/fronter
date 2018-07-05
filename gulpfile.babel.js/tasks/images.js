import gulp from 'gulp';
import { resolve } from 'path';
import svgstore from 'gulp-svgstore';
import svgmin from 'gulp-svgmin';
import rename from 'gulp-rename';

import { paths } from '../../config';

const compile = (done) => {
  gulp
    .src(resolve(paths.images.srcDir, 'icons', '*.svg'))
    .pipe(rename({ prefix: 'i-' }))
    .pipe(
      svgmin({
        plugins: [
          {
            convertColors: {
              currentColor: true,
            },
          },
          {
            removeTitle: true,
          },
        ],
      }),
    )
    .pipe(svgstore())
    .pipe(rename('icons.svg'))
    .pipe(gulp.dest(paths.images.buildDir));
  done();
};

export default {
  compile,
};
