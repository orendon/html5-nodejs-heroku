
var canvas,
    ctx,
    mousePressed = false,
    x = 0,
    y = 0;

window.onload = start;

function start() {
  canvas = document.getElementById("wbCanvas");
  ctx = canvas.getContext("2d");

  document.getElementById("color").value = "0000FF";
  setColor();

  canvas.addEventListener("mousemove", onMouseMove, false);
  canvas.addEventListener("mousedown", onMousePress, false);
  canvas.addEventListener("mouseup", onMousePress, false);

  if(typeof(startSocket) == 'function') {
    startSocket();
  }
}

function onMousePress(e) {
  if(mousePressed) {
    mousePressed = false;
  }
  else {
    ctx.moveTo(x, y);
    //ctx.begiPath();
    mousePressed = true;
  }
}

function onMouseMove(e) {
  if (e.layerX || e.layerX == 0) { // firefox
    x = e.layerX;
    y = e.layerY;
  }
  else if (e.offsetX || e.offsetX == 0) { // opera
    x = e.offsetX;
    y = e.offsetY;
  }
  if(mousePressed) {
    drawLine(x, y);
    if(typeof(sendData) == 'function') {
      sendData(x, y, ctx.strokeStyle);
    }
  }
}

function drawLine(x, y) {
  ctx.lineTo(x, y);
  ctx.stroke();
}

function setColor(beginPath){
  if(beginPath) {
    ctx.beginPath();
  }
  var color = "#" + document.getElementById("color").value;
  ctx.strokeStyle = color;
  document.getElementById("message").innerHTML = "color changed to " + color;
}

