var http = require('http');
var fs = require('fs');
var getPage = require('./getFile');
var fileName = 'index.html';
var url = {
    host: 'www.google.de',
    port: 80,
    method: 'GET',
    path: '/' };

var cb = function () {
    http.createServer(function (req, res) {
        console.log('reading file');
        fs.readFile(fileName, 'utf-8', function (err, data) {
            console.log('sending file');
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }).listen(8080, function () {
        console.log('Server listening on http://localhost:8080');
    });
};

getPage(url, cb, fileName);
