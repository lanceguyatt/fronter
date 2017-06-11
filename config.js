import dotenv from 'dotenv/config';
import { resolve } from 'path';
import gutil from 'gulp-util';

const port = process.env.PORT || 8081;

const isProduction = process.env.NODE_ENV === 'production';

const srcDir = resolve(__dirname, 'src');
const destDir = resolve(__dirname, 'build');

const paths = {
  srcDir,
  destDir,
  styles: {
    srcDir: resolve(srcDir, 'styles'),
    destDir: resolve(destDir, 'styles'),
  },
  images: {
    srcDir: resolve(srcDir, 'images'),
    destDir: resolve(destDir, 'images'),
  },
  scripts: {
    srcDir: resolve(srcDir, 'scripts'),
    destDir: resolve(destDir, 'scripts'),
  },
  templates: {
    srcDir: resolve(srcDir, 'templates'),
    destDir,
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
  server: destDir,
  port,
};

export { dotenv, port, isProduction, paths, onError, browserSyncOptions };

export default config;
