const bookshelf = require('./bookshelf');
const Authors = require('./Titles');

const Titles = bookshelf.Model.extend({
    tableName: "Authors",
    bookTitles(){
    }
    

});

module.exports = Authors;