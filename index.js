
var server = require('./server.js'),
    router = require('./router.js'),
    handler = require('./handlers'),
    sockets = require('./sockets.js');

var socket = new sockets.SocketServer;

var handlers = {};
handlers['/'] = handler.index;
handlers['/chat'] = handler.chat;
handlers['/wb'] = handler.wb;
handlers['/wb/wb-client.js'] = handler.wb;

console.log('index socket: ' + socket);

server.start(router, handlers, socket);
