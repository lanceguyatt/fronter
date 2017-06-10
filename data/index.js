import site, { name, description, url, type, image } from './site';
import paths from './paths';
import author from './author';
import views from './views/';

const view = {
  name,
  description,
  url,
  type,
  image,
};

const gulpstarter = {
  site,
  paths,
  author,
  views,
  view,
};

export default gulpstarter;
