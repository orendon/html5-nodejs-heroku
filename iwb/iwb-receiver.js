
var socket, ctx;

window.onload = function() {;
  socket = io.connect();
  ctx = document.getElementById("wbCanvas").getContext("2d");

  socket.on("get-iwb-message", updateWhiteboard);
}

function updateWhiteboard(data) {
  ctx.strokeStyle = data.color;
  ctx.lineTo(data.x, data.y);
  ctx.stroke();
}

