const express=require('express')
const AppError=require('./utils/appError')
const globalErrorhandler=require('./controllers/errcontroller')
const appUserRoute=require('./routes/appUserRoutes')
const postRoute=require('./routes/postRoutes')

const app=express()

app.use(express.json())


app.use('/api/u1/appUser',appUserRoute),
app.use('/api/p1/post',postRoute)

//handling unhandeled routes 
app.all('*',(req,res,next)=>{
    // res.status(404).json({
    //     status:"failed",
    //     message:`cant find ${req.originalUrl} on thhis url`
    // })
    next(new AppError(`cant find ${req.originalUrl} on thhis url`))
})
app.use(globalErrorhandler)


module.exports=app