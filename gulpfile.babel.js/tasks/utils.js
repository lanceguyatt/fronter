import gulp from 'gulp'
import gulpClean from 'gulp-clean'
import { resolve } from 'path'
import gulpSitemap from 'gulp-sitemap'

import relative from '../plugins/document-relative'
import { homepage } from '../../package.json'
import { paths } from '../../config'

const copy = done => {
  gulp.src(resolve(paths.staticDir, '**')).pipe(gulp.dest(paths.buildDir))
  done()
}

const clean = done => {
  gulp.src(resolve(paths.buildDir, '**', '**', '*.html')).pipe(gulpClean())
  done()
}

const relativePath = done => {
  gulp
    .src(resolve(paths.buildDir, '**', '**', '**', '**', '*.html'))
    .pipe(
      relative({
        directory: 'build',
        url: 'http://localhost:3000',
      })
    )
    .pipe(gulp.dest('build'))
  done()
}

const sitemap = done => {
  gulp
    .src(resolve(paths.buildDir, '**', '**', '**', '**', '*.html'), {
      read: false,
    })
    .pipe(
      gulpSitemap({
        siteUrl: homepage,
      })
    )
    .pipe(gulp.dest(paths.buildDir))
  done()
}

export default {
  clean,
  copy,
  relativePath,
  sitemap,
}
