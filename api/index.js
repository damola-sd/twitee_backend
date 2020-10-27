const router = require('express').Router();

const userRouter = require('./routes/user');
const twitRouter = require('./routes/twit');


router.use('/user', userRouter);
router.use('/twit', twitRouter);


module.exports = router;
