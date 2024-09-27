const express=require('express')
const userControler=require('./../controllers/userController')
const authController=require('./../controllers/authcontroller')

const router=express.Router()

router.get('/',userControler.getAllUser)
router.post('/signUp',authController.createNewUser)

module.exports=router