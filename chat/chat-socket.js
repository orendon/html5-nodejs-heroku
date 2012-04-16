
// socket events for chat experiment

function bind(socket) {
  socket.on('chat-message', function (data) {
      //console.log("the message was: " + data.message);
      socket.emit('get-chat-message', { details: data.nick + ': ' + data.message } );
      socket.broadcast.emit('get-chat-message', { details: data.nick + ': ' + data.message } );
  });
}

exports.bind = bind;
