const express = require('express');
const router = express.Router();

//Importo modelo de datos
const UsuarioController = require('../controllers/UsuarioController');

// End-points CRUD movies
router.get('/', UsuarioController.getAll);
router.get('/:id', UsuarioController.getById);
router.get('/type/:type', UsuarioController.getByType);
router.post('/', UsuarioController.create);
router.put('/:id', UsuarioController.update);
router.delete('/', UsuarioController.deleteAll);
router.delete('/:id', UsuarioController.delete);

module.exports = router;