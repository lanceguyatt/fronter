import moment from 'moment';

const { name, description, homepage } = require('../package.json');

const site = {
  name,
  description,
  url: homepage,
  themeColor: '#000',
  lang: 'en',
  locale: 'en_GB',
  type: 'website',
  image: {
    url: `${homepage}/android-chrome-512x512.png`,
    width: 512,
    height: 512,
    alt: 'Gulpstarter logo',
  },
  dateModified: moment().format('MMMM Do YYYY, h:mma'),
  copyrightYear: moment().format('YYYY'),
  datePublished: '2017-3-13',
};

export default site;
