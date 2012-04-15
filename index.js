
var server = require('./server.js'),
    router = require('./router.js'),
    handler = require('./handlers'),
    sockets = require('./sockets.js');

var socket = new sockets.SocketServer;

var handlers = {};
handlers['/'] = handler.index;
handlers['/libs'] = handler.libs;
handlers['/chat'] = handler.chat;
handlers['/wb'] = handler.wb;

console.log('index socket: ' + socket);

server.start(router, handlers, socket);
