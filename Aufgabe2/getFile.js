var http = require('http');
var fs = require('fs');

module.exports = function (url, cb, target) {
    var request = http.request(url);

    console.log('starting download');

    request.on('response', function (response) {
        var body = '';
        response.on('readable', function () {
            body += response.read();
        });
        response.on('end', function () {
            console.log('finished download');
            fs.writeFile(target, body, 'binary', function (err) {
                console.log('file written');
                cb();
            });
        });
    });
    request.end();
};
