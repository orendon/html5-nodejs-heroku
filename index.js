
var server = require('./server.js'),
    router = require('./router.js'),
    handlers = require('./handlers');

var routes = {};
routes['/'] = handlers.index;
routes['chat'] = handlers.chat;

server.start(router, routes);
