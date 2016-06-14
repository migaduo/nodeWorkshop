'use strict';

var Sensor = require('./sensor');

var sensor = new Sensor();

sensor.on('data', function (data) {
    console.log(data);
});

sensor.start();

setTimeout(function () {
    sensor.stop();
}, 15000);
