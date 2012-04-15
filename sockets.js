
function SocketServer() {
  this.socketio = require('socket.io');
  
  var socketio = this.socketio;
  var io;

  this.listen= function(app) {
    io = socketio.listen(app);
    
    //heroku configuration
    io.configure(function () {
      io.set("transports", ["xhr-polling"]);
      io.set("polling duration", 10);
    });

    //socket handlers
    io.sockets.on('connection', function (socket) {
        socket.on('putMessage', function (data) {
          console.log("the message was: " + data.message);
          socket.emit('test', { details: data.nick + ': ' + data.message } );
          socket.broadcast.emit('test', { details: data.nick + ': ' + data.message } );
        }); 
    });
  }

}
exports.SocketServer = SocketServer;
