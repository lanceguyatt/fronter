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

const onError = ({ err }) => {
  gutil.beep();
  gutil.log(err.message);
  // console.log(err);
  this.emit('end');
};

const config = {
  port,
  isProduction,
  paths,
  onError,
};

const browserSyncOptions = {
  open: false,
  notify: false,
  server: buildDir,
  port,
};

export { dotenv, port, isProduction, paths, onError, browserSyncOptions };

export default config;
