/* eslint global-require: 0 */
const postCSSCustomProperties = require('postcss-custom-properties')

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
    postCSSCustomProperties({
      strict: false,
      preserve: false,
      warnings: true,
    }),
    require('postcss-color-function'),
    require('autoprefixer', {
      remove: false,
    }),
  ],
}
