/* eslint global-require: 0 */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-short'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-custom-media'),
    require('postcss-custom-selectors'),
    require('css-mqpacker', {
      sort: true,
    }),
    require('lost'),
    require('postcss-calc', {
      precision: 5,
      preserve: true,
    }),
    require('postcss-media-minmax'),
    require('postcss-custom-properties'),
    require('postcss-color-function'),
    require('autoprefixer', {
      remove: false,
    }),
  ],
};
