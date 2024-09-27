const mongoose=require('mongoose')


const tourSchema= new mongoose.Schema({
    name:{
        type: String,
        required:[true ,'you must have a name '],
        unique:true
    },
    slug:String,
    maxGroupSize: {
        type: Number,
        required: [true, 'A tour must have a group size']
      },
      difficulty: {
        type: String,
        required: [true, 'A tour must have a difficulty'],
        enum: {
          values: ['easy', 'medium', 'difficult'],
          message: 'Difficulty is either: easy, medium, difficult'
        }
      },
  
    rating:{
    type:Number,
    default:4.5
    },
    duration:{
    type:Number,
    required:[true,'you must tell the duration ']
    },
    

      ratingsAverage: {
        type: Number,
        
        min: [1, 'Rating must be above 1.0'],
        max: [5, 'Rating must be below 5.0']
      },
      ratingsQuantity: {
        type: Number,
        default: 0
      },
      price: {
        type: Number,
        required: [true, 'A tour must have a price']
      },
      priceDiscount: {
        type: Number,
        validate: {
          validator: function(val) {
            // this only points to current doc on NEW document creation
            return val < this.price;
          },
          message: 'Discount price ({VALUE}) should be below regular price'
        }
      },
      summary: {
        type: String,
        trim: true,
        required: [true, 'A tour must have a description']
      },
      description: {
        type: String,
        trim: true
      },
      imageCover: {
        type: String,
       
      },
      images: [String],
      createdAt: {
        type: Date,
        default: Date.now(),
        select: false,
      startDates: [Date],
      secretTour: {
        type: Boolean,
        default: false
      }}, 
      
})

// tourSchema.pre('save',function(next){
//  this.slug =slugify(this.name,{lower:true})
//  next()
// })
const Tour=mongoose.model('Tour',tourSchema)

module.exports=Tour