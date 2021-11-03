const express = require('express');
// const AuthController = require('../controllers/AuthController');
const router = express.Router();

//Importo modelo de datos
const UsuarioController = require('../controllers/UsuarioController');

// End-points CRUD movies


router.get('/', UsuarioController.getAll);
router.get('/:id', UsuarioController.getById);
router.get('/usuario/:usuario', UsuarioController.getByType);
router.post('/', UsuarioController.create);
router.put('/:id', UsuarioController.update);
router.delete('/', UsuarioController.deleteAll);
router.delete('/:id', UsuarioController.delete);
// router.post('/signin', UsuarioController.signIn);
// router.post('/signup', UsuarioController.signUp);

module.exports = router;