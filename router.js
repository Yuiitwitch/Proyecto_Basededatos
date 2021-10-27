const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views
const MovieRouter = require('./views/MovieRouter');
const OrderRouter = require('./views/OrderRouter');
const UserRouter = require('./views/UserRouter');
const UsuarioRouter = require('./views/UsuarioRouter');

//Rutas
router.use('/api', UserRouter); //Login and register routes
router.use('/movies',auth, MovieRouter); //add auth
router.use('/order',auth, OrderRouter);
router.use('/usuario',auth, UsuarioRouter);

module.exports = router;