var controller = require('./controller');

function router (app) {
    app.get('/', controller.indexAction);
    app.get('/list', controller.listAction)
}
module.exports = router;
