
const PokemonCards = require('../models/PokemonCards');
//const models = require('../models');

/*
 * Create - skapa ett kort i databasen
 */
const create = async(req, res) => {
    try{

        let card = new PokemonCards(req.body).save();
        
        return res.status(201).send(
            {
                success: true,
                data:{
                    card
                }
            }
        )

    } catch (err) {
        return res.status(500).send(
            {
                success: false,
                data: err.message
            }
        );
    }
}

/*
 * Read - läs ett eller flera kort från databasen
 */
const read = async(req, res) => {
    try {

        let card;
        if(req.params.id){
            card = await PokemonCards.where({"id" : req.params.id}).fetch({ require: false});        
        } else {
            card = await PokemonCards.fettchAll();
        }

        if(!card) {
            return res.status(400).send({
                success: false,
                data: 'Not found'
            });
        }


        return res.status(200).send({
            success: true,
            data: {
                card
            }
        });
         
    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err.message
        });
    }
}
/*
 * Update - Uppdaterat ett kort i dtabasen
 */
const update = async(req, res) => {
    try { 

        let card = await PokemonCards.where({ "id" : req.params.id }).fetch({ require : true});

        card = await card.set(req.body).save();

        return res.status(200).send({
            success: true,
            data: {
                card
            }
        });

    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err.message
        });
    }
 
}

/*
 * Delete
 */
const destroy = async(req, res) => {
    try { 

        let card = await PokemonCards.where({ "id" : req.params.id }).fetch({ require : true});

        card = await card.destroy();

        return res.status(200).send({
            success: true,
            data: {
                card
            }
        });

    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err.message
        });
    }
 
}



module.exports = {
    create,
    read,
    update,
    destroy

}