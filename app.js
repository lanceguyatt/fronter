require('dotenv').config();

const { resolve } = require('path');
const serve = require('serve');

const port = process.env.PORT || 8081;

const app = serve(resolve(__dirname, 'build'), { port });

module.exports = app;
