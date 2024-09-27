const User=require('./../models/userModel')


exports.getAllUser=async (req,res )=>{
    try {
        const user=await User.find()
        
        res.status(200).json({
            status:'success',
            message:"here are yourv all users",
            count:user.length,
            data:{
                user
            }
        })
    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:"something went wrong "
    })

}}