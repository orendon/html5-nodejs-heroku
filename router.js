
function route(path, handle, response) {
  if(handle[path] != null) {
    handle[path](response);
  }
  else {
    console.log('routing error, can handle path: ' + path);
    //reponse.writeHead(404);
  }
}

exports.route = route;
