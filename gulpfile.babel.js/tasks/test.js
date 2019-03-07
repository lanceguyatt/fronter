import gulp from 'gulp'
import { resolve } from 'path'
import gulpStylelint from 'gulp-stylelint'
import htmlhint from 'gulp-htmlhint'

import { paths } from '../../config'

const css = done => {
  gulp.src(resolve(paths.styles.srcDir, '**', '*.css')).pipe(
    gulpStylelint({
      failAfterError: true,
      reportOutputDir: 'reports/lint',
      reporters: [
        { formatter: 'verbose', console: true },
        { formatter: 'json', save: 'report.json' },
      ],
    })
  )
  done()
}

const html = done => {
  gulp
    .src(resolve(paths.templates.buildDir, '**', '*.html'))
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
  done()
}

export default {
  css,
  html,
}
