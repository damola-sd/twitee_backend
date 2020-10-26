const router = require('express').Router();
const controller = require('../controllers/user');
const userValidators = require('../validator/userValidator');


router.post('/register', [userValidators.validateUserSignup], controller.register);

module.exports = router;