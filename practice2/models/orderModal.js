const mongoose=require('mongoose')


const orderSchema=new mongoose.Schema(
    {
        name:{
            type:String
        },
    size:{
        type:String,
        enum:['small','medium','large'],
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
    }
      }
      
)
const Order=mongoose.model('Order',orderSchema)

module.exports=Order