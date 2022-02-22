const express = require('express');
const router = express.Router();
const titles_controller = require('../controllers/titles_controller');

router.get('/',  titles_controller.read);

router.get('/:id', titles_controller.read);

router.post('/', titles_controller.create);

router.put('/:id', titles_controller.update);

router.delete('/:id', titles_controller.destroy);

module.exports = router;