const express = require('express');
const router = express.Router();
const pokemoncards_controller = require('../controllers/pokemoncards_controller');


router.get('/', (req, res) => {  //  -> /pokemonbattles/
    pokemoncards_controller.read(req, res);
});


router.get('/:id', (req, res) => {  
    res.send('GET (' + req.params.id + ') not yet implemented!');
});


router.post('/', (req, res) => {
    res.send('POST not yet implemented');
});


router.put('/:id', (req, res) => {
    res.send('PUT (' + req.params.id + ') not yet implemented');
});


router.delete('/:id', (req, res) => {
    res.send('DELETE (' + req.params.id + ') not yet implemented');
});

module.exports = router;