
var canvas,
    ctx,
    mousePressed = false,
    x = 0,
    y = 0;

window.onload = start;

function start() {
  canvas = document.getElementById("wbCanvas");
  ctx = canvas.getContext("2d");
  console.log("started");
  canvas.addEventListener("mousemove", onMouseMove, false);
}

function onMousePress(e) {
  //ctx.beginPath();
  //ctx.moveTo(x, y);
  mousePressed = true;
}

function onMouseMove(e) {
  if (e.layerX || e.layerX == 0) { // Firefox
    x = e.layerX;
    y = e.layerY;
  }
  else if (e.offsetX || e.offsetX == 0) { // Opera
    x = e.offsetX;
    y = e.offsetY;
  }
  if(mousePressed) {
    drawLine(x, y);
  }
  else {
    onMousePress();
  }
  console.log(x + "," + y);
}

function drawLine(x, y) {
  ctx.lineTo(x, y);
  ctx.stroke();
}

