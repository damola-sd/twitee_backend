const router = require('express').Router();
const controller = require('../controllers/twit');
const auth = require('../helpers/jwt');
const userValidators = require('../validator/userValidator');

router.get('/', controller.fetchTwits);
router.post('/new', [auth.authUser, userValidators.validateUserExists], controller.postTwit);
router.delete('/:twitId', [auth.authUser, userValidators.validateUserExists], controller.deleteTwit);


module.exports = router;