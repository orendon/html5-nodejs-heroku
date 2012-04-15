
function route(path, handle, response) {
  var rootPath = decode(path);
  if(handle[rootPath] != null) {
    handle[rootPath](response, path);
  }
  else {
    console.log('routing error, can handle path: ' + path);
    response.writeHead(404);
    response.end();
  }
}


/*
 * decode path to share the handler on nested resources
 * example: /libs/jscolor/jscolor.js -> /libs
*/
function decode(path) {
  var index = path.substring(1).indexOf('/');
  if(index > 0) {
    return path.substring(0, index+1);
  }
  else {
    return path;
  }
}

exports.route = route;
