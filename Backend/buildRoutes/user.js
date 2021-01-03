const express = require('express');

const router = express.Router();

// Require controller modules.
const signupController = require('../controllers/signupController');
const signinController = require('../controllers/signinController');

// Require Middlewares
const { jwt } = require('../utils/auth');

// Render the Signin Page with Google OAuth Page
router.get('/signin', signinController.signin_signin_get);

// email verification
router.get('/:id/confirm-verification/:token', signinController.signin_emailVerification_get);


module.exports = router;
