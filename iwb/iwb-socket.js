
// socket events for interactive whiteboard

function bind(socket) {
  socket.on('iwb-message', function (data) {
      //console.log("the color was: " + data.color);
      socket.emit('get-iwb-message', { details: data.color + ': ' + data.coords } );
      socket.broadcast.emit('get-iwb-message', { details: data.color + ': ' + data.coords } );
  });
}

exports.bind = bind;
