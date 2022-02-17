const express = require('express');
const router = express.Router();

// Implementera GET / READ - Alla
router.get('/',(req,res) =>{
    res.send('GET not implemented');
});

// Implementera GET / READ - Ett author
router.get('/:id',(req,res) =>{ // nummer vill ha (id)
    res.send('GET ' + req.params.id + ' not implemented yet!');
}); 

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