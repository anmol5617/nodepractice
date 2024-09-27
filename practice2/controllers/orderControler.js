const Order = require('./../models/orderModal')


exports.getAllorder = async (req, res) => {
    try {
        const order = await Order.find()
        res.status(200).json({
            status: "success",
            message: 'here are yours all orders ',
            data: {
                order
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: 'something went wrong '
        })
    }
}

// getOrder

// newOrder

exports.createOrder = async (req, res) => {
    try {
        const neworder = await Order.create(req.body)
        res.status(200).json({
            status: "success",
            message: 'here are yours all orders ',
            data: {
                neworder
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: 'something went wrong '
        })
    }
}




// updateOrder

// deleteOrder
