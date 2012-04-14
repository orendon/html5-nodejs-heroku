var app = require('http').createServer(handler),
	io = require('socket.io').listen(app),
	fs = require('fs'),
  port = process.env.PORT || 3000;
	counter = 0;

app.listen(port);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.configure(function () {
  io.set("transports", ["xhr-polling"]);
  io.set("polling duration", 10);
});

io.sockets.on('connection', function (socket) {
	
	socket.on('putMessage', function (data) {
		console.log("the message was: " + data.message);
		socket.emit('test', { details: data.nick + ': ' + data.message } );
		socket.broadcast.emit('test', { details: data.nick + ': ' + data.message } );
	});
	
});
