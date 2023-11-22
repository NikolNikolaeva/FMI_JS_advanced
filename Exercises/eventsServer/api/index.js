const router=require('express').Router();
const userRouter=require('./events/router');

router.use('/event',userRouter);
module.exports=router;