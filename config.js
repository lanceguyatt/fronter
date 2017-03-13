require('dotenv').load();

const { resolve } = require('path');
const gutil = require('gulp-util');

const srcDir = resolve(__dirname, 'src');
const destDir = resolve(__dirname, 'build');

const config = {
  port: process.env.PORT || 8081,
  prod: process.env.NODE_ENV === 'production',
  paths: {

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
  },

  files: {
    styles: [
      `${srcDir}/styles/hashgrid.css`,
      `${srcDir}/styles/site.css`,
    ],
    scripts: [],
  },

  onError(err) {
    gutil.beep();
    gutil.log(err.message);
    // console.log(err);
    this.emit('end');
  },
};

module.exports = config;
