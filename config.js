import dotenv from 'dotenv/config';
import { resolve } from 'path';
import gutil from 'gulp-util';

const port = process.env.PORT || 8081;

const isProduction = process.env.NODE_ENV === 'production';

const srcDir = resolve(__dirname, 'src');
const buildDir = resolve(__dirname, 'build');

const paths = {
  srcDir,
  buildDir,
  styles: {
    srcDir: resolve(srcDir, 'styles'),
    buildDir: resolve(buildDir, 'styles'),
  },
  images: {
    srcDir: resolve(srcDir, 'images'),
    buildDir: resolve(buildDir, 'images'),
  },
  scripts: {
    srcDir: resolve(srcDir, 'scripts'),
    buildDir: resolve(buildDir, 'scripts'),
  },
  templates: {
    srcDir: resolve(srcDir, 'templates'),
    buildDir,
  },
};

export function onError(err) {
  gutil.beep();
  gutil.log(err.message);
  /* eslint no-console: 0 */
  console.log(err);
  this.emit('end');
}

export { dotenv, port, isProduction, paths };
