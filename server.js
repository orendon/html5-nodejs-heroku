
var http = require("http")
var heroku_port = process.env.PORT || 3000;

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("guepaje!");
    response.end();
}).listen(heroku_port);
