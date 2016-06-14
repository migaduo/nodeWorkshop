var http = require('http');

var server = http.createServer(function (request, response) {
    response.end('Hello Client');
});

server.listen(8080, function () {
    console.log('Server running on http://localhost:8080');
});


var http = require('http');
var request = http.request({
    host: 'localhost',
    port: 8080,
    method: 'GET',
    path: '/'
});
request.on('response', function (response) {
    var body = '';
    response.on('readable', function () {
        body += response.read();
    });
    response.on('end', function () {
        console.log(body);
    });
});
request.end();