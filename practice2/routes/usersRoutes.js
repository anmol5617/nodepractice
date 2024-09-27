const express = require('express')
const UserController = require('./../controllers/usersController')


const router = express.Router()


router.get('/', UserController.getAllUsers)
router.get('/most-fav-fruits', UserController.getTopFavfruitlist)
router.get('/avg-age', UserController.avgAgeofallusers)
router.get('/inactive-elit', UserController.uiavitn)

module.exports = router