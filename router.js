const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views
const MovieRouter = require('./views/MovieRouter');
const OrderRouter = require('./views/OrderRouter');
const UsuarioRouter = require('./views/UsuarioRouter');
const UserRouter = require('./views/UserRouter');

//Rutas
router.use('/api', UserRouter); //Login and register routes
// router.use('/movie',auth, MovieRouter); //add auth
// router.use('/order',auth, OrderRouter);
// router.use('/usuario',auth, UsuarioRouter);
router.use('/movie', MovieRouter); //add auth
router.use('/order', OrderRouter);
router.use('/usuario', UsuarioRouter);


module.exports = router;

