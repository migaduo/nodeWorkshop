var express = require('express');

var app = express();

var router = require('./router');

router(app);

app.listen(8080, () => console.log('server is da!'));