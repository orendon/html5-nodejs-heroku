
function route(path, handle, response) {
  if(handle[path] != null) {
    handle[path](response);
  }
  else {
    console.log('routing error, can handle path: ' + path);
    response.writeHead(404);
    response.end();
  }
}

exports.route = route;
