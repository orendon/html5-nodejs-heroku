
var http = require('http'),
	socketio = require('socket.io'),
	fs = require('fs'),
  port = process.env.PORT || 3000,
  url = require('url');

var http, io, counter = 0;

function start(router, handlers) {
  app = http.createServer(requestHandler),
  app.listen(port);
  io = socketio.listen(app);
  configureSocketServer();
  console.log('server started...');

  function requestHandler(request, response) {
    var path = url.parse(request.url).pathname;
    console.log('---- processing request for: ' + path);
     router.route(path, handlers, response);
  }
}

function configureSocketServer() {
  //heroku configuration
  io.configure(function () {
    io.set("transports", ["xhr-polling"]);
    io.set("polling duration", 10);
  });

  //socket
  io.sockets.on('connection', function (socket) {
      socket.on('putMessage', function (data) {
        console.log("the message was: " + data.message);
    		socket.emit('test', { details: data.nick + ': ' + data.message } );
		    socket.broadcast.emit('test', { details: data.nick + ': ' + data.message } );
      });	
  });
}

exports.start = start;

