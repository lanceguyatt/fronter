import gulp from 'gulp';
import { resolve } from 'path';
import browserSync from 'browser-sync';
import webpack from 'webpack';

import webpackConfig from '../../webpack/webpack.config.dev';
import { port, paths } from '../../config';

const bs = browserSync.create('main');

const styles = require('../styles/');
const templates = require('../templates/');

const watch = () => {
  webpackConfig.watch = true;

  bs.init(null, {
    open: false,
    notify: false,
    server: paths.destDir,
    port,
  }, () => {
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

  gulp.watch(resolve(paths.styles.srcDir, '**', '*.css'), styles);
  gulp.watch(resolve(paths.templates.srcDir, '**', '*.pug'), templates);
};

export default watch;
