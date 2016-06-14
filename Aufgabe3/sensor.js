'use strict';

var EventEmitter = require('events');

class TemperaturSensor extends EventEmitter {

    constructor() {
        super();
        this.interval = null;
    }

    start() {
        this.interval = setInterval(function () {
            this.emit('data', {
                date: new Date(),
                temperatur: Math.floor(Math.random() * 10000) / 100
            });
        }.bind(this), 1000)
    }

    stop() {
        clearInterval(this.interval);
    }
}

module.exports = TemperaturSensor;
