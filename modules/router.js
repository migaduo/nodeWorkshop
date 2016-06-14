// Routing from ExpressJS
'use strict';

var values = {
  euro: 0,
  dollar: 0
};

var converter = require('./converter');

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