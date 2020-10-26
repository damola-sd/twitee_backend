const router = require('express').Router();
const controller = require('../controllers/user');
const userValidators = require('../validator/userValidator');


router.post('/register', [userValidators.validateUserSignup], controller.register);
router.post('/login', [userValidators.validateUserEmail], controller.login);

module.exports = router;