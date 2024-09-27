
const User=require('./../models/userModel')

////to find all user by find 
exports.getAllUsers = async(req,res)=>{
    try{
        const alluser=await User.find()
        res.status(200).json({
            status:'successfull',
            result:alluser.length,
             message:"here is your single tour with id",
             data:{
                alluser
             }
        })
    }catch(err){
        res.status(500).json({
            status:'fail',
            message:"something went wrong "
        })
    }
}

//find user by findid 

exports.getUserbyid = async(req,res)=>{
    try{
        const user=await User.findById(req.params.id,req.body)
        res.status(200).json({
            status:'successfull',
             message:"here is your single user with id",
             data:{
                user
             }
        })
    }catch(err){
        res.status(500).json({
            status:'fail',
            message:"something went wrong "
        })
    }
}



//creating new users test
exports.createUsers =async (req,res)=>{
    try{
        const newUser=await User.create(req.body)
        const a = new User({

            name: "ghg"
        });

        await a.save();
        User.insertMany([{name : "bn"}]);
        res.status(500).json({
            status:'success',
            message:"your new user is create successfully",
            data:{
                newUser
            }
        })
    }catch(err){
        res.status(400).json({
            status:'erooorrr--------failed',
            message:"invalid data sent"
        })
    }
    
}

///updating one user with updateone 
exports.updateUsers =async(req,res)=>{
    const updateOneUser= await User.findByIdAndUpdate(req.params.id,req.body)
    // const updateOneUser= await User.updateOne({age:19},{name:"abnmol singh"})
    res.status(500).json({
        status:'updated',
        message:"hello from update  user"
    })
}


/////deleteone by id 
exports.deleteUsers =async (req,res)=>{
    try{
        const deleteOneuser= await User.findByIdAndDelete(req.params.id,req.body)


        //deleted one with the name refrence
        // const deleteOneuser= await User.deleteOne({name:"1l3"})
        // await User.findById(req.param.id,req.body)
        res.status(500).json({
            status:'successs ',
            message:"deleted succesfully"
    
    })

}catch(err){
    res.status(500).json({
        status:'failed',
        message:"something went wrong  se all"
})
}
}