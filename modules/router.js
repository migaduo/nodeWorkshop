'use strict';
// @author: Dirk Lipjes <dirk.lipjes@wfp2.com>
// Clean values for EUR and USD
var values = {
  euro: 0,
  dollar: 0
};

// Require converter.js
var converter = require('./converter');

// Routing from ExpressJS
function router (app) {
  app.get('/', function (req, res) {
    res.render('index.jade', values);
  });
  app.post('/form', function (req, res) {
    var euro    = req.body.euroInput;
    var dollar  = req.body.dollarInput;

    values.dollar = converter.dollarToEuro(dollar);
    values.euro   = converter.euroToDollar(euro);

    res.redirect('/');
  })
}

module.exports = router;