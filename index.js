'use strict';
// NodeJS Application
// @dep: Express, Jade
// @author: Dirk Lipjes <dirk.lipjes@wfp2.com>
// @version: 0.1

// ExpressJS init
var express = require('express');
var app = express();

// Jade view engine config
app.set('view engine', 'jade');
app.set('views', './views');

// Setup Static files for ExpressJS
app.use(express.static('public'));

// Require modules
var converter = require('./modules/converter');
var router = require('./modules/router');
var bodyParser = require('body-parser');

// MomentJS in Jade
app.locals.moment = require('moment');

// BodyParser config
app.use(bodyParser.urlencoded({ extended: false }));

// Init Router
router(app);

// Server config
app.listen(1337);