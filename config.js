import dotenv from 'dotenv/config'
import { resolve } from 'path'
import gutil from 'gulp-util'

const port = process.env.PORT || 8081
const isProduction = process.env.NODE_ENV === 'production'

const buildDir = resolve(__dirname, 'public')
const srcDir = resolve(__dirname, 'src')
const staticDir = resolve(__dirname, 'static')

const paths = {
  buildDir,
  srcDir,
  staticDir,
  styles: {
    srcDir: resolve(srcDir, 'styles'),
    buildDir: resolve(buildDir, 'assets', 'styles'),
  },
  images: {
    srcDir: resolve(srcDir, 'images'),
    buildDir: resolve(buildDir, 'assets', 'images'),
  },
  scripts: {
    srcDir: resolve(srcDir, 'scripts'),
    buildDir: resolve(buildDir, 'assets', 'scripts'),
  },
  templates: {
    srcDir: resolve(srcDir, 'templates'),
    buildDir,
  },
}

const onError = err => {
  gutil.beep()
  gutil.log(err.message)
  /* eslint no-console: 0 */
  console.log(err)
  this.emit('end')
}

export { dotenv, port, isProduction, paths, onError }
