const express = require('express');
const router = express.Router();
const titles_controller = require('../controllers/titles_controller');

router.get('/',  users_controller.read);

router.get('/:id', users_controller.read);

router.post('/', users_controller.create);

router.put('/:id', users_controller.update);

router.delete('/:id', users_controller.destroy);

module.exports = router;