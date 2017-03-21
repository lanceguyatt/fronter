const site = require('./site');
const paths = require('./paths');
const author = require('./author');

const { name, description, url, image, type } = site;

module.exports = {
    site,
    paths,
    author,
    view: {
        name,
        description,
        url,
        image,
        type,
    },
};
