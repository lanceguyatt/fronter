const path = require('path');
const gutil = require('gulp-util');

const port = process.env.PORT || 8081;
const prod = process.env.NODE_ENV === 'production';

const srcDir = path.join(__dirname, 'src');
const destDir = path.join(__dirname, 'build');

const styles = 'styles';

const config = {
    port,
    prod,
    paths: {
        srcDir,
        destDir,
        styles: {
            srcDir: path.join(srcDir, styles),
            destDir: path.join(destDir, styles),
        },
        images: {
            srcDir: path.join(srcDir, 'images', 'icons'),
            destDir: path.join(destDir, 'images'),
        },
        scripts: {
            srcDir: path.join(srcDir, 'scripts'),
            destDir: path.join(destDir, 'scripts'),
        },
        templates: {
            srcDir: path.join(srcDir, 'templates'),
            destDir,
        },
    },
    files: {
        styles: [
            './src/styles/site.css',
            './src/styles/hashgrid.css',
        ],
        scripts: [
            './src/scripts/site.js',
        ],
    },
    onError(err) {
        gutil.beep();
        gutil.log(err.message);
        // console.log(err);
        this.emit('end');
    },
};

module.exports = config;
