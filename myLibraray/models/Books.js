const bookshelf = require('./bookshelf');
const Authors = require('./Titles');

const Titles = bookshelf.Model.extend({
    tableName: "Books",
    bookTitles(){
    }
    

});

module.exports = Authors;