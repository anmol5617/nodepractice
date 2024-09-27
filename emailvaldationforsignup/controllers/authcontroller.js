const mongoose=require('mongoose')
const User=require('./../models/userModel')
  

exports.createNewUser=async(req,res)=>{
    try {
        const newUser=await User.create(req.body)
        res.status(200).json({
            status:'success',
            message:"new user is created ",
            data:{
                newUser
            }
        })
    } catch (error) {
        console.log(error)
        // if (error.name === 'ValidationError') {
        //     return res.status(400).json({ error:{message:"in email u  can only use @electrovese.com"} });
        // }
        if (error.code === 11000) {
            // Duplicate key error
                return res.status(400).json({ message: 'Email already exists.' })
        }
        if (error instanceof mongoose.Error.ValidationError) {
            const errors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ errors });
        }

        res.status(400).json({
            status:'fail',
            message:"something went wrong"
        })
    }
}