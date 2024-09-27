const express = require('express')
const authController = require('./../controllers/authController')

const userControlers = require('./../controllers/usercontroler')


const router = express.Router()
router.post('/signup', authController.signUp)
router.post('/login', authController.login)
router.route('/').get(userControlers.getAllUsers).post(userControlers.createUsers).delete(userControlers.deleteUsers).patch(userControlers.updateUsers)
router.route('/:id').patch(userControlers.updateUsers).delete(userControlers.deleteUsers).get(userControlers.getUserbyid)

module.exports = router