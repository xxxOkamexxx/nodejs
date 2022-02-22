const express = require('express');
const router = express.Router();
const authors_controller = require('../controllers/authors_controller');

// Implementera GET / READ - Alla
router.get('/', authors_controller.read);

// Implementera GET / READ - Ett author
router.get('/:id', authors_controller.read); 

router.post('/',(req,res) =>{
    res.send('POST not yet implemented');
});

router.put('/:id',(req,res) =>{
    res.send('PUT (' + req.params.id + ') not yet implemented');
});

router.delete('/:id',(req,res) =>{
    res.send('DELETE (' + req.params.id + ') not yet implemented');
});


module.exports = router;