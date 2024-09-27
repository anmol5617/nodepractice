const mongoose = require('mongoose')
const Emp = require('./../models/empModel')


exports.getEmp = async (req, res) => {
    try {
        const empdata = await Emp.find()
        res.status(200).json({
            status: "success",
            message: "new employe created successfully ",
            totalEmp: empdata.length,
            data: {
                empdata
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "failed ",
            message: "something went wrong try again ",
        })
    }
}



exports.createEmp = async (req, res) => {
    try {
        const newEmp = await Emp.create(req.body)
        res.status(200).json({
            status: "success",
            message: "new employe created successfully ",
            data: {
                newEmp
            }
        })
    } catch (error) {
        console.log(error)


        if (error.code === 11000) {

            return res.status(400).json({
                error: `errorr..${error.errorResponse.errmsg}`
            })
        }
        if (error instanceof mongoose.Error.ValidationError) {
            const errors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ errors });
        }

        res.status(400).json({
            status: "failed ",
            message: "something went wrong try again ",
        })
    }
}


exports.updateEmp = async (req, res) => {
    try {
        const uEmp = await Emp.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            status: "success",
            message: "employe updated successfully ",
            data: {
                uEmp
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "failed ",
            message: "something went wrong try again ",
        })
    }
}


exports.deleteEmp = async (req, res) => {
    try {
        const dEmp = await Emp.findByIdAndDelete(req.params.id, req.body)
        res.status(200).json({
            status: "success",
            message: " employe deleted successfully ",
            data: {
                dEmp
            }
        })
    } catch (error) {

        res.status(400).json({
            status: "failed ",
            message: "something went wrong try again ",
        })
    }
}

