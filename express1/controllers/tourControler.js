 const Tour=require('./../models/tourModel')
const APIFeatures=require('./../utils/apiFeatures')



 exports.topfivecheap=(req,res,next)=>{
    req.query.limit='5'
    req.query.sort='-ratingsAverage,price'
    req.query.fields='name,price,summary,difficulty'
    next()
 }
 exports.getAllTours = async (req, res) => {
    try {
      // EXECUTE QUERY
      const features = new APIFeatures(Tour.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
      const tours = await features.query;
  
      // SEND RESPONSE
      res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
          tours
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };
//     //gett all tours by find method               
// exports.getAllTours=async(req,res)=>{

//     try{
//         const tours=await Tour.find()
//             res.status(200).json({
//                 status:'here are alll the tours',
//                 results:tours.length,
//                 data:{
//                     tours
//                 }
//             })

//         }catch(err){
//             res.status(200).json({
//                 status:'errrooooo---------fail',
//                 message:'invlid  something went wrong'
//             })
//         }
//     }
//  ///get a gingle tour with the help of the id 
    exports.getTour=async(req,res)=>{
        try{
            const tour=await Tour.findById(req.params.id)
            res.status(200).json({
                status:'successfull',
                 message:"here is your single tour with id",
                 data:{
                    tour
                 }
            })
        }catch(err){

        }
    }

////creating tour with create method
exports.createTour=async(req,res)=>{

    try{
        const newTour=await Tour.create(req.body)
    

    // newId=tours[tours.length - 1].id +1
    // newTour=Object.assign({id:newId},req.body)

    // tours.push(newTour)
    // fs.writeFile(`${__dirname}/dev-data/tours.json`,JSON.stringify(tours),err=>{
        res.status(201).json({
        status:"successfully created ",
        data:{
            tour:newTour
        }     
})  }catch(err){
    res.status(400).json({
        status:'erooorrr--------failed',
        message:"invalid data sent"
    })
}
}
  
////updting the tour by id using findbyidand uddate
exports.updateTour=async(req,res)=>{

    try{
        const updatedtour=await Tour.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({
        status:"successfully upadated ",
        data:{
            updatedtour
        }
      })}catch(err){
        res.status(400).json({
            status:"failed ",
            message:'something went wrong while updating'
        
        })
    }

     
}


exports.deleteTour=async(req,res)=>{

    try{
        const tour=await Tour.findByIdAndDelete(req.params.id,req.body)
        res.status(200).json({
            status:"successfully deleted ",
            message:'the tour is deleted',
            data:{
            tour
            }
        })
    }catch(err){
        res.status(400).json({
            status:"erroor  you can not delete this",
        
        }) 
    }
   
}

exports.getTourStats=async(req,res)=>{
    try{
        const stats=await Tour.aggregate([
            {
                $match:{ratingsAverage:{$gte:4.5}}
            },
            {
                $group:{
                    _id:'$name',
                    numTours:{$sum:1},
                    numRatings:{$sum:'$ratingsQuantity'},
                    avgRatings:{$avg:'$ratingsAverage'},
                    avgPrice:{$avg:'$price'},
                    minPrice:{$avg:'$price'},
                    maxPrice:{$avg:'$price'}
                }
            }
        ])
        res.status(200).json({
            status:"stats",
            data:{
                stats
            }
        })
    }catch(err){
        res.status(400).json({
            status:"erroor  s",
        
        }) 
    }
}


