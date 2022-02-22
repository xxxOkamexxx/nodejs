const bookshelf = require('./bookshelf');
const Authors = require('./Authors');

const Titles = bookshelf.Model.extend({
    tableName: "Titles",

});

module.exports = Titles;