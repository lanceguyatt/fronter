import gulp from 'gulp';
import webpack from 'webpack';
import { resolve } from 'path';
import browserSync from 'browser-sync';
import gutil from 'gulp-util';

import { port, paths, isProduction } from '../config';

const webpackConfig = require(`../webpack/webpack.config.${isProduction ? 'prod' : 'dev'}`);

const bs = browserSync.create('main');
gulp.task('server:start', () => {
  bs.init(null, {
    open: false,
    notify: false,
    server: paths.buildDir,
    port,
  }, () => {
    gutil.log(gutil.colors.magenta(`
      :::===== :::====  :::====  :::= === :::==== :::===== :::====
      :::      :::  === :::  === :::===== :::==== :::      :::  ===
      ======   =======  ===  === ========   ===   ======   =======
      ===      === ===  ===  === === ====   ===   ===      === ===
      ===      ===  ===  ======  ===  ===   ===   ======== ===  ===
    `));
    webpack(webpackConfig).watch({}, (err, stats) => {
      const hasErrors = err || stats.hasErrors();
      if (err) {
        console.error(err.stack || err);

        if (err.details) {
          console.error(err.details);
        }

        bs.notify(err.message, 10000);
      } else {
        const info = stats.toJson();

        if (stats.hasErrors()) {
          bs.notify(info.errors[0].split('\n\n')[0], 10000);
        }

        if (stats.hasWarnings()) {
          bs.notify(info.warnings[0], 10000);
        }

        console.log(stats.toString(webpackConfig.stats));

        if (!hasErrors && bs.active) {
          bs.reload(resolve(webpackConfig.output.path, '**', '*.js'));
        }
      }
    });
  });
});
