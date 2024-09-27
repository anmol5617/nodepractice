const express=require('express')
const postController=require('./../controllers/postController')

const router=express.Router()

router.post('/',postController.createPost)
router.get('/',postController.getAllposts)
router.get('/date&device',postController.getusingagregate)
router.get('/users',postController.getUserswith)
router.get('/id:',postController.getpost)
router.delete('/id:',postController.deletePost)


module.exports=router