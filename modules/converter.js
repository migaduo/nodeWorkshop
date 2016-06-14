// NodeJS Module
// @content: Converting money
// @author: Dirk Lipjes <dirk.lipjes@wfp2.com>
'use strict';

// Bid price
var USD = 0.891658976;
var EUR = 1.121505;

function euroToDollar(euroVal) {
    return euroVal / USD;
}

function dollarToEuro(dollarVal) {
    return dollarVal / EUR;
}

module.exports = {
    dollarToEuro: dollarToEuro,
    euroToDollar: euroToDollar
};