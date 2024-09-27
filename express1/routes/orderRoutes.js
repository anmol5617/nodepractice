const express = require('express')
const orderControlller = require('./../controllers/orderControler')

const router = express.Router()

router.route('/').get(orderControlller.getAllorder).post(orderControlller.createOrder)
router.route('/stats').get(orderControlller.orderstats)

module.exports = router