const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const validations = require('../validations/usersValidations');


// index
router.get('/', indexController.index);
router.get('/bienvenida', indexController.bienvenida);
router.get('/gracias', indexController.gracias)

// process register
router.post('/', validations, indexController.indexPost);

module.exports = router;