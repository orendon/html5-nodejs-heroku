
var server = require('./server.js'),
    router = require('./router.js'),
    handlers = require('./handlers');

var routes = {};
routes['/'] = handlers.index;
routes['/chat'] = handlers.chat;
routes['/wb'] = handlers.wb;
routes['/wb/wb-client.js'] = handlers.wb;

server.start(router, routes);
