const express = require('express')
const orderController = require('./../controllers/orderControler')


const router = express.Router()

router.get('/', orderController.getAllorder);
router.post('/', orderController.createOrder);

// router.route('/').get(orderController.getAllorder).post(orderController.createOrder)


module.exports = router