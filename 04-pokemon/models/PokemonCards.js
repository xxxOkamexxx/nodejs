const bookshelf = require('./bookshelf');

/*
const PokemonCards = bookshelf.model(PokemonCards,{
    tableName: "PokemonCards"
});
*/

const PokemonCards = bookshelf.model('PokemonCards', {
    tableName: "PokemonCards"
})
module.exports = PokemonCards;