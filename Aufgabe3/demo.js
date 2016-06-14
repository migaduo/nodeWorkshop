var EventEmitter = require('events');

var ee = new EventEmitter();
ee.on('event', function (e) {
    console.log(e);
});
ee.emit('event', 'data');