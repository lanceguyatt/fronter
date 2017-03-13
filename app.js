const finalhandler = require('finalhandler');
const { createServer } = require('http');
const serveStatic = require('serve-static');

const { paths, port } = require('./config');

const serve = serveStatic(paths.destDir, {
  index: ['index.html'],
});

const server = createServer((req, res) => {
  const done = finalhandler(req, res);
  serve(req, res, done);
});

server.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
