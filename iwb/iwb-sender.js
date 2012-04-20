
var socket;

function startSocket() {
  socket = io.connect();
}

function sendData(coordx, coordy, actualColor) {
  var data = { x: coordx, y: coordy, color: actualColor };
  socket.emit("iwb-message", data);
}
