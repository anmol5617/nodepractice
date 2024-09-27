const Order = require('./../models/ordermodels')


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
exports.orderstats = async (req, res) => {
    const stats = await Order.aggregate([
        {
            $group: {
                _id: '$size'
            }
        }
        // {
        //     $match: { size: "medium" }
        // },
        // {
        //     $group: {
        //         _id: "$name",
        //         totalQuantity: { $sum: "$quantity" }
        //     }
        // }
    ])
    res.status(200).json({
        status: "success",
        message: 'here are yours all orders ',
        data: {
            stats
        }
    })

}