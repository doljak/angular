const http = require('http');

function onRequest(resq, resp){
  resp.writeHead(200, {'Content-type':'text/plain'});
  resp.write("Hello World");
  resp.end()
}

http.createServer(onRequest).listen(3000,()=> console.log('I\'m listening'))