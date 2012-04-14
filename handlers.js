
var fs = require('fs'),
    response = { code: 0, content: null, requireSocket: false };


function index() {
  return loadFile('/index.html').requireSocket = false;
}

function chat() {
  return loadFile('/chat/index.html').requireSocket = true;
}

function wb() {
}

function iwb() {
}

function loadFile(file){
  fs.readFile(__dirname + file),
    function(err, data) {
      if(err) {
        response.code = 500;
        response.content = 'error loading file...';
      }
      else {
        response.code = 200;
        response.content = data;
      }
      return response;
    }
  );
}

exports.index = index;
exports.chat = chat;
