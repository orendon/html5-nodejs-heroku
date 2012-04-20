
// socket events for interactive whiteboard

function bind(socket) {
  socket.on('iwb-message', function (data) {
      //console.log("the color was: " + data.color);
      //socket.emit('get-iwb-message', { x: data.x, y: data.y, color: data.color } );
      socket.broadcast.emit('get-iwb-message', { x: data.x, y: data.y, color: data.color } );
  });
}

exports.bind = bind;
