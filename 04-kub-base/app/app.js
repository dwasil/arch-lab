const http = require('http');

const handleRequest = function (request, response) {

  console.log('Получен запрос на URL: ' + request.url);

  if (request.url === '/health/') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    });
    response.end('{"status": "OK"}');
  }
  else if (request.url === '/version/') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    });
    response.end('{"version": "0.1"}');
  }
  else {
    response.writeHead(200);
    response.end('Hello World!');
  }
};

const server = http.createServer(handleRequest);

setTimeout(() => { server.listen(8000); }, 10000);
