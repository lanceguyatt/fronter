/* eslint-disable import/no-dynamic-require, no-console */
const webpack = require('webpack');
const { isProduction } = require('../../config');

const webpackConfig = require(`../../webpack/webpack.config.${isProduction ? 'prod' : 'dev'}`);

const scripts = (done) => {
    webpack(webpackConfig)
        .run((err) => {
            if (err) {
                console.error(err);
                if (err.details) {
                    console.error(err.details);
                }
                return;
            }
            done();
        });
};

module.exports = scripts;
