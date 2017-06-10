import moment from 'moment';

import { name, description, homepage } from '../package.json';

const url = homepage;

const image = {
  url: `${homepage}/android-chrome-512x512.png`,
  width: 512,
  height: 512,
  alt: 'Gulpstarter logo',
};

const type = 'website';

const site = {
  name,
  description,
  url,
  image,
  type,
  themeColor: '#000',
  lang: 'en',
  locale: 'en_GB',
  dateModified: moment().format('MMMM Do YYYY, h:mma'),
  copyrightYear: moment().format('YYYY'),
  datePublished: '2017-3-13',
};

export { name, description, url, type, image };

export default site;
