const bookshelf = require('./bookshelf');
const PokemonBattles = require('./PokemonBattles')

const PokemonCards = bookshelf.Model.extend({
    tableName: "PokemonBattles"
       
});

/*
const PokemonCards = bookshelf.model('PokemonCards', {
    tableName: "PokemonBattles"
})
*/
module.exports = PokemonCards;