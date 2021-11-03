const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views
const MovieRouter = require('./views/MovieRouter');
const OrderRouter = require('./views/OrderRouter');
const UsuarioRouter = require('./views/UsuarioRouter');
const AuthRouter = require('./views/AuthRouter');
// const UserRouter = require('./views/UserRouter');

//Rutas
router.use('/api', AuthRouter); //Login and register routes
router.use('/movie', MovieRouter); //add auth
router.use('/order', OrderRouter);
router.use('/usuario', UsuarioRouter);
// router.use('/movies', MovieRouter); //add auth
// router.use('/orders', OrderRouter);
// router.use('/usuarios', UsuarioRouter);


module.exports = router;

