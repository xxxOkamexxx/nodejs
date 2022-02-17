const { application } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('OK!');
});

router.use('/authors', require('./authors_route'));

module.exports = router;