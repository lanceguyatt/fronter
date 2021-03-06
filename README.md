# Fronter [![dependencies Status](https://david-dm.org/lanceguyatt/fronter/status.svg)](https://david-dm.org/lanceguyatt/fronter) [![devDependency Status](https://david-dm.org/lanceguyatt/fronter/dev-status.svg?style=flat-square)](https://david-dm.org/lanceguyatt/fronter#info=devDependencies)

> Front-end starter kit.

# Quick-Start Guide

- [Installation](#installation)
- [Development Workflow](#development-workflow)
- [Builders](#builders)
- [Servers](#servers)
- [Scripts](#scripts)
- [Styles](#styles)
- [Templates](#templates)
- [Images](#images)
- [Linters](#linters)

## Installation

**1. Clone this repo:**

```sh
git clone git@github.com:lanceguyatt/fronter.git my-app
cd my-app
```

**2. Make it your own**

```sh
rm -rf .git && git init && npm init
```
> This re-initializes the repo and sets up your NPM project.

**3. Install the dependencies:**

Install via [yarn]

```sh
yarn
```
Or via [npm]

```sh
npm install
```
> You're done installing! Now let's get started developing.

## Development Workflow

**4. Start a [`browser-sync`] development server**

```sh
gulp
```
> Browser sync

**5. Generate a production build in `./build`:**

```sh
gulp build
```
> Build

**6. Start local production server with [`serve`]:**

```sh
npm start
```
> Serve

---

## Builders

* [`gulp`] The streaming build system
* [`webpack`] A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows to load parts for the application on demand. Through "loaders," modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON, Coffeescript, LESS, ... and your custom stuff.

[`gulp`]: https://github.com/gulpjs/gulp
[`webpack`]: https://github.com/webpack/webpack

---

## Servers

* [`gulp-nodemon`] gulp + nodemon + convenience
* [`browser-sync`] Keep multiple browsers & devices in sync when building websites
* [`serve`] Static file serving and directory listing

[`gulp-nodemon`]: https://github.com/JacksonGariety/gulp-nodemon
[`browser-sync`]: https://github.com/BrowserSync/browser-sync
[`serve`]: https://github.com/zeit/serve

---

## Scripts

* [`babel-core`] Babel compiler core
* [`babel-loader`] Webpack plugin for Babel
* [`babel-preset-env`] Autoprefixer for Babel: compile less
* [`svg4everybody`] Use external SVG spritemaps today

[`babel-core`]: https://github.com/babel/babel/tree/master/packages/babel-core
[`babel-loader`]: https://github.com/babel/babel-loader
[`babel-preset-env`]: https://github.com/babel/babel-preset-env
[`svg4everybody`]: https://github.com/jonathantneal/svg4everybody

---

## Styles

* [`autoprefixer`] Parse CSS and add vendor prefixes to rules by Can I Use
* [`css-mqpacker`] A tool for packing same CSS media query rules into one with PostCSS
* [`lost`] LostGrid is a powerful grid system built in PostCSS that works with any preprocessor and even vanilla CSS
* [`postcss`] Transforming styles with JS plugins
* [`postcss-import`] PostCSS plugin to inline @import rules content
* [`postcss-nested`] PostCSS plugin to unwrap nested rules like how Sass does it.
* [`postcss-short`] Use advanced shorthand properties in CSS
* [`postcss-mixins`] PostCSS plugin for mixins
* [`postcss-simple-vars`] PostCSS plugin for Sass-like variables
* [`postcss-custom-media`] PostCSS plugin to transform W3C CSS Custom Media Queries to more compatible CSS
* [`postcss-custom-selectors`] PostCSS Custom Selectors
* [`postcss-calc`] PostCSS plugin to reduce calc()
* [`postcss-custom-properties`] PostCSS plugin to transform W3C CSS Custom Properties for cascading variables
* [`postcss-color-function`] PostCSS plugin to transform W3C CSS color function to more compatible CSS
* [`gulp-postcss`] Pipe CSS through PostCSS processors with a single parse

[`autoprefixer`]: https://github.com/postcss/autoprefixer
[`css-mqpacker`]: https://github.com/hail2u/node-css-mqpacker
[`postcss`]: https://github.com/postcss/postcss
[`gulp-postcss`]: https://github.com/postcss/gulp-postcss
[`lost`]: https://github.com/peterramsing/lost
[`postcss-calc`]: https://github.com/postcss/postcss-calc
[`postcss-color-function`]: https://github.com/postcss/postcss-color-function
[`postcss-custom-media`]: https://github.com/postcss/postcss-custom-media
[`postcss-custom-properties`]: https://github.com/postcss/postcss-custom-properties
[`postcss-custom-selectors`]: https://github.com/postcss/postcss-custom-selectors
[`postcss-import`]: https://github.com/postcss/postcss-import
[`postcss-mixins`]: https://github.com/postcss/postcss-mixins
[`postcss-nested`]: https://github.com/postcss/postcss-nested
[`postcss-short`]: https://github.com/jonathantneal/postcss-short
[`postcss-simple-vars`]: https://github.com/postcss/postcss-simple-vars

---

## Templates

* [`pug`] Pug – robust, elegant, feature rich template engine for Node.js
* [`gulp-pug`] Gulp plugin for compiling Pug templates
* [`jstransformer-markdown-it`] Markdown-It support for JSTransformers.

[`pug`]: https://github.com/pugjs/pug
[`gulp-pug`]: https://github.com/pugjs/gulp-pug
[`jstransformer-markdown-it`]: https://github.com/jstransformers/jstransformer-markdown-it

---

## Images

* [`gulp-svgmin`] Minify SVG files with gulp.
* [`gulp-svgstore`] Combine svg files into one with <symbol> elements

[`gulp-svgmin`]: https://github.com/ben-eb/gulp-svgmin
[`gulp-svgstore`]: https://github.com/w0rm/gulp-svgstore

---

## Linters

* [`eslint`] The pluggable linting utility for JavaScript and JSX
* [`eslint-plugin-import`] ESLint plugin with rules that help validate proper imports

* https://github.com/prettier/eslint-config-prettier

* [`gulp-htmlhint`] htmlhint wrapper for gulp to validate your HTML
* [`gulp-stylelint`] Gulp plugin for running Stylelint results through various reporters
* [`stylelint`] A mighty, modern CSS linter
* [`stylelint-config-standard`] The standard shareable config for stylelint

[`eslint`]: http://eslint.org/
[`eslint-plugin-import`]: https://github.com/benmosher/eslint-plugin-import
https://github.com/prettier/eslint-config-prettier
[`gulp-htmlhint`]: https://github.com/bezoerb/gulp-htmlhint
[`gulp-stylelint`]: https://github.com/olegskl/gulp-stylelint
[`stylelint`]: https://github.com/stylelint/stylelint
[`stylelint-config-standard`]: https://github.com/stylelint/stylelint-config-standard

---

## Formatters

* [`prettier`] Prettier is an opinionated code formatter.

[`prettier`]: https://github.com/prettier/prettier

---

## Utils

* [`gulp-changed`] Only pass through changed files
* [`gulp-cli`] CLI for gulp
* [`gulp-rename`] Rename files easily
* [`gulp-size`] Display the size of your project
* [`gulp-util`] Utilities for gulp plugins

[`gulp-changed`]: https://github.com/sindresorhus/gulp-changed
[`gulp-cli`]: https://github.com/gulpjs/gulp-cli
[`gulp-rename`]: https://github.com/hparra/gulp-rename
[`gulp-size`]: https://github.com/sindresorhus/gulp-size
[`gulp-util`]: https://github.com/gulpjs/gulp-util

---

## License

[MIT](./LICENSE) &copy; [Lance Guyatt](http://lanceguyatt.com)

[npm]: https://www.npmjs.com/
[yarn]: https://www.npmjs.com/package/yarn
