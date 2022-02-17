const bookshelf = require('./bookshelf');


const PokemonFriends = bookshelf.Model.extend({
    tableName: "PokemonFriends",
    cards() {
        return this.belongToMany(PokemonCards, "PokemonFriendCards", "friend","card");
    }
})


/*
const PokemonCards = bookshelf.model(PokemonCards,{
    tableName: "PokemonCards"
});
*/
/*
const PokemonCards = bookshelf.model('PokemonCards', {
    tableName: "PokemonCards"
})
*/
module.exports = PokemonFriends;