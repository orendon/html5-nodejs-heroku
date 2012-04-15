
// simple http server

var http = require('http'),
	fs = require('fs'),
  port = process.env.PORT || 3000,
  url = require('url');

var http, io, counter = 0;

function start(router, handlers, socket) {
  app = http.createServer(requestHandler),
  app.listen(port);

  socket.listen(app);
  console.log('server started...');

  function requestHandler(request, response) {
    var path = url.parse(request.url).pathname;
    console.log('---- processing request for: ' + path);
     router.route(path, handlers, response);
  }
}

exports.start = start;

