const router = require('express').Router();

const userRouter = require('./routes/user');
const twitRouter = require('./routes/twit');
const commentRouter = require('./routes/comment');

router.use('/user', userRouter);
router.use('/twit', twitRouter);
router.use('/comment', commentRouter);

module.exports = router;
