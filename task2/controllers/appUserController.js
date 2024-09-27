const AppUser=require('./../models/appUserModal')



exports.getAllUser=async (req,res )=>{
    try {
        const user=await AppUser.find()
        
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

exports.createUser=async (req,res)=>{
try {
    const newUser=await AppUser.create(req.body)

    res.status(200).json({
        status:"success",
        message :"new user created successfully",
        data:{
            newUser
        }
    })

} catch (err) {
    console.log(err)
    res.status(200).json({
        status:"failed",
        message :"something went wrong",
        
    })
}}

