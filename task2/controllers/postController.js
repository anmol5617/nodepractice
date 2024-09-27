   const Post=require('./../models/postModal')

   const catchAsync=require('./../utils/catchAsync')




exports.getAllposts=catchAsync(async (req,res,next )=>{
   
        const post=await Post.find()
        
        res.status(200).json({
            status:'success',
            message:"here are yourv all users",
            count:post.length,
            data:{
                post
            }
        })
    } )

    
exports.getpost=catchAsync(async (req,res,next )=>{
   
    const post=await Post.findById(req.params.id)
    
    res.status(200).json({
        status:'success',
        message:"here is the user",
        data:{
            post
        }
    })
} )


    exports.getUserswith=catchAsync(async(req,res,next)=>{
        const users=await Post.aggregate([
            
            
                {
                    $lookup: {
                        from: "appusers",
                        localField: "user_id",
                        foreignField: "user_id",
                        as: "user_info"
                    }
                },
                  {
                    $unwind: "$user_info"
                },
                {
                    $project: {
                        device_type: "$user_info.device_type",
                        formatted_date: {
                            $dateToString: {
                                format: "%Y-%m-%d",
                                date: "$date_posted"
                            }
                        }
                    }
                }
                ,{
                    $group: {
                        _id: {
                            device_type: "$device_type",
                            date: "$formatted_date"
                        },
                        post_count: { $sum: 1 }
                    }
                },
                  {
                    $group: {
                        _id: "$_id.device_type",
                        posts: {
                            $push: {
                                date: "$_id.date",
                                post_count: "$post_count"
                            }
                        }
                    }
                },{
                    $project: {
                        device_type: "$_id",
                        posts   : 1,
                        _id:1
                        
                    }
                }
                
                
                
                
                
                
                
                
                  
                
        ])
        res.status(200).json({
            status:'success',
            message:"here is the data ",
            data:{
                users
            }
        })
    })


exports.getusingagregate=catchAsync(async (req,res,next )=>{
   
 
        const user=await Post.aggregate(
            [
            
                {
                  $lookup: {
                    from: "appusers",               
                    localField: "user_id",      
                    foreignField: "user_id",        
                    as: "user_info"             
                  }
                },
                {
                  $unwind: "$user_info"        
                },
                {
                  $group: {
                    _id: {
                      date: { $dateToString: { format: "%Y-%m-%d", date: "$date_posted" } }, 
                      device_type: "$user_info.device_type" // Group by device type
                    },
                    post_count: { $sum: 1 }    
                  }
                },
                {
                  $project: {
                    date: "$_id.date",         
                    device_type: "$_id.device_type",
                    post_count: 1               
                  }
                },
                {
                  $sort: { date: 1, device_type: 1 } 
                }
                ,{
                  $limit:10
                }
              
              
            
            
           
                // {
                //     $lookup: {
                //         from: "appusers",
                //         localField: "user_id",
                //         foreignField: "user_id",
                //         as: "user_info"
                //     }
                // },
                // {
                //     $unwind: "$user_info" 
                // },
                // {
                //     $project: {
                //         device_type: "$user_info.device_type", 
                //         formatted_date: {
                //             $dateToString: {
                //                 format: "%Y-%m-%d", 
                //                 date: "$date_posted" 
                //             }
                //         }
                //     }
                // },
                // {
                //     $group: {
                //         _id: {
                //             device_type: "$device_type",
                //             date: "$formatted_date" 
                //         },
                //         post_count: { $sum: 1 } 
                //     }
                // },
                // {
                //     $group: {
                //         _id: "$_id.device_type", 
                //         posts: {
                //             $push: {
                //                 date: "$_id.date", 
                //                 post_count: "$post_count" 
                //             }
                //         }
                //     }
            
                // }, 
                // {
                //     $unwind:"$posts"
                // },
                // {
                //     $sort: {
                //         "posts.date": -1 
                //     }
                // }
        ])

      
        res.status(200).json({
            status:'success',
            message:"here is the data ",
            data:{
               user
            }
        })
    } )



exports.createPost=catchAsync(async (req,res,next)=>{

        const newPost=await Post.create(req.body)
    
        res.status(200).json({
            status:"success",
            message :"posted successfully ",
            data:{
                newPost
            }
        })
    
    }  )


    exports.deletePost=catchAsync(async(req,res,next)=>{
        const user=await Post.findByIdAndDelete(req.params.id,req.body)

        
        res.status(200).json({
            status:"success",
            message :"deleted  successfully ",
            data:{
                user
            }
        }) 
    })