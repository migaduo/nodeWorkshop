var _ = require('lodash');
var arr = ['a', 'b', 'c'];

var arr2 = _.map(arr, function (e) {
    return e.toUpperCase();
});

console.log(arr2);
