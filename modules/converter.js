'use strict';
// NodeJS Module
// @content: Converting money
// @author: Dirk Lipjes <dirk.lipjes@wfp2.com>

// Bid price
var USD = 0.891658976;
var EUR = 1.121505;

function euroToDollar(euroVal) {
  var euroInput   = euroVal / USD;
  var euroResult  = round(euroInput, 2);
  return euroResult;
}

function dollarToEuro(dollarVal) {
  var dollarInput   = dollarVal / EUR;
  var dollarResult  = round(dollarInput, 2);
  return dollarResult;
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

module.exports = {
    dollarToEuro: dollarToEuro,
    euroToDollar: euroToDollar
};