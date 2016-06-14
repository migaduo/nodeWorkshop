'use strict';

var name;

function getName() {
    return name;
}

function setName(temp) {
    name = temp;
}

module.exports = {
    getName: getName,
    setName: setName
};