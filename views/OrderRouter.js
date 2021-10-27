const express = require('express');
const router = express.Router();

//Importo modelo de datos
const OrderController = require('../controllers/OrderController');

// End-points CRUD movies
router.get('/', OrderController.getAll);
router.get('/:id', OrderController.getById);
router.get('/type/:type', OrderController.getByType);
router.post('/', OrderController.create);
router.put('/:id', OrderController.update);
router.delete('/', OrderController.deleteAll);
router.delete('/:id', OrderController.delete);

module.exports = router;