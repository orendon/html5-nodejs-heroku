

function bind(socket) {
  socket.on('send-message', function (data) {
      //console.log("the message was: " + data.message);
      socket.emit('get-message', { details: data.nick + ': ' + data.message } );
      socket.broadcast.emit('get-message', { details: data.nick + ': ' + data.message } );
  });
}

exports.bind = bind;
