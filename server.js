
var http = require('http'),
	socketio = require('socket.io'),
	fs = require('fs'),
  port = process.env.PORT || 3000;

var http, io, counter = 0;

function start() {
  app = http.createServer(requestHandler),
  io = socketio.listen(app);
  app.listen(port);
  configureSocketServer();
}

function requestHandler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading file...');
    }

    res.writeHead(200);
    res.end(data);
  });
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

