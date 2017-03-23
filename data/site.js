const moment = require('moment');
const pkg = require('../package.json');

const { description } = pkg;

module.exports = {
    name: 'Gulpstarter',
    description,
    url: 'http://gulpstarter.surge.sh',
    themeColor: '#000',
    lang: 'en',
    locale: 'en_GB',
    type: 'website',
    image: {
        url: 'http://gulpstarter.surge.sh/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Gulpstarter',
    },
    dateModified: moment().format('MMMM Do YYYY, h:mma'),
    copyrightYear: moment().format('YYYY'),
    datePublished: '2017-3-13',
};
