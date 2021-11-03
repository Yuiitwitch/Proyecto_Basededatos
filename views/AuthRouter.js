const express = require('express');
const AuthController = require('../controllers/AuthController');
const router = express.Router();

// End-points CRUD auth



router.post('/signin', AuthController.signIn);
router.post('/signup', AuthController.signUp);

module.exports = router;