
var server = require('./server.js'),
    router = require('./router.js'),
    handler = require('./handlers'),
    sockets = require('./sockets.js');

var events = {
  chat: './chat/chat-socket.js',
  iwb:  './iwb/iwb-socket.js'
};
var socket = new sockets.SocketServer(events);

var handlers = {};
handlers['/'] = handler.index;
handlers['/libs'] = handler.libs;
handlers['/chat'] = handler.chat;
handlers['/wb'] = handler.wb;
handlers['/iwb'] = handler.iwb;
handlers['/geo'] = handler.geo;
handlers['/css'] = handler.libs;

console.log('index socket: ' + socket);

server.start(router, handlers, socket);
