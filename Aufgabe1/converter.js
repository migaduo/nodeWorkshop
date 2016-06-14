var euroInDollar = 1.12617;
var dollarInEuro = 0.887965405;

module.exports = {
    euroInDollar: function (euro) {
        var dollar = euro * euroInDollar;
        return dollar;
    },
    dollarInEuro: function (dollar) {
        var euro = dollar * dollarInEuro;
        return euro;
    }
};
