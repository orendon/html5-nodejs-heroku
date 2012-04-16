
function SocketServer(events) {
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

    //bind socket events
    io.sockets.on('connection', function (socket) {
        for(event in events) {
          require(events[event]).bind(socket);
        }
    });
  }

}
exports.SocketServer = SocketServer;
