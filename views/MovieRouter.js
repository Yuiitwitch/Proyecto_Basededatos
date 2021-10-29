const express = require('express');
const router = express.Router();

//Importo modelo de datos
const MovieController = require('../controllers/MovieController');

// End-points CRUD movies
router.get('/', MovieController.getAll);
router.get('/:id', MovieController.getById);
router.get('/name/:name', MovieController.getByName);
router.get('/gender/:gender', MovieController.getByGender);
router.get('/actor/:actor', MovieController.getByActor);
router.post('/', MovieController.create);
router.put('/:id', MovieController.update);
router.delete('/', MovieController.deleteAll);
router.delete('/:id', MovieController.delete);

module.exports = router;