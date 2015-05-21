var gobble = require("gobble");

module.exports = gobble([
    gobble("src"),
    gobble("src/js").transform("ractive", {
        type: "es6"
    }).transform("esperanto-bundle", {
        entry: "index",
        type: "umd",
        name: "index",
        skip: "ractive",
    }).moveTo("js"),
]);
