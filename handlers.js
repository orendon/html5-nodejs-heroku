
var fs = require('fs');

function index(response) {
  loadFile('/index.html', response);
}

function libs(response, resource) {
  loadFile(resource, response);
}

function chat(response) {
  loadFile('/chat/index.html', response);
}

function wb(response, resource) {
  if(resource == '/wb') {
    loadFile('/wb/index.html', response);
  }
  else {
    loadFile(resource, response);
  }
}

function iwb(response, resource) {
  if(resource == '/iwb') {
    loadFile('/iwb/receiver.html', response);
  }
  else {
    loadFile(resource, response);
  }
}

function geo(response, resource) {
  if(resource == '/geo') {
    loadFile('/geo/index.html', response);
  }
  else {
    loadFile(resource, response);
  }
}

function loadFile(file, response) {
  fs.readFile(__dirname + file,
    function(err, data) {
      if(err) {
        response.writeHead(500);
        response.end('error loading file...');
      }
      else {
        response.writeHead(200);
        response.end(data);
      }
    }
  );
}

exports.index = index;
exports.libs = libs;
exports.chat = chat;
exports.wb = wb;
exports.iwb = iwb;
exports.geo = geo;

