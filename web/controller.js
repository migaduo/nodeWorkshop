var Persons = require('./model');
var persons = new Persons();

function indexAction(request, response) {
    response.send('Hello Client');
}

function listAction (req, res) {

    var leute = persons.getPersons();

    var template = '<ul>';

    leute.forEach((person) => {
        template += `<li>${person}</li>`
    });
    template += '</ul>';

    res.send(template);
}

module.exports = {
    indexAction: indexAction,
    listAction: listAction
};