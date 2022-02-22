const bookshelf = require('./bookshelf');

const Titles = bookshelf.Model.extend({
    tableName: "Users",
    

});

module.exports = Titles;