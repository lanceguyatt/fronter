const { resolve } = require('path');

const srcDir = resolve(__dirname, 'src');
const destDir = resolve(__dirname, 'build');

const styles = 'styles';
const images = 'images';
const scripts = 'scripts';
const templates = 'templates';

const port = process.env.PORT || 8081;

module.exports = {
    port,
    isProduction: process.env.NODE_ENV === 'production',
    paths: {
        srcDir,
        destDir,
        styles: {
            srcDir: resolve(srcDir, styles),
            destDir: resolve(destDir, styles),
        },
        images: {
            srcDir: resolve(srcDir, images),
            destDir: resolve(destDir, images),
        },
        scripts: {
            srcDir: resolve(srcDir, scripts),
            destDir: resolve(destDir, scripts),
        },
        templates: {
            srcDir: resolve(srcDir, templates),
            destDir,
        },
        public: {
            srcDir: resolve(srcDir, 'public'),
            destDir,
        },
    },
    files: {
        styles: [
            `${srcDir}/styles/site.css`,
        ],
        scripts: [
            `${srcDir}/scripts/site.js`,
        ],
    },
};
