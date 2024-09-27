const express=require('express')
const appUsercontroller=require('./../controllers/appUserController')

const router=express.Router()

router.post('/',appUsercontroller.createUser)
router.get('/',appUsercontroller.getAllUser)

module.exports=router