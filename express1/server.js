const express = require('express')
const mongoose = require('mongoose')

const dotenv = require('dotenv')
const app = express()

const userRouter = require('./routes/userRoute')
const tourRouter = require('./routes/toursRoute')
const orderRouter = require('./routes/orderRoutes')
const port = process.env.PORT || 3000

dotenv.config({ path: './.env' })

const DB = process.env.DATABASE.replace('<DBPASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {

})
    .then(con => {

        console.log("DB is connected succesfully")
    })





app.use(express.json())

// app.get('/api/v1/tours/:id',(req,res)=>{
//             console.log(req.params)
//             const id=req.params.id*1
//             const tour=tours.find(el=>el.id===id)
//     res.status(200).json({  
//         status:'success',                                        
//         data:{
//             tours
//         }
//     })
// })


app.use('/api/v1/tours', tourRouter)

app.use('/api/v1/users', userRouter)
app.use('/api/v1/orders', orderRouter)


//middleware for all failed requests
app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'failed',
        message: `cant find${req.originalUrl} on this server`
    })
})

app.listen(port, () => {
    console.log(`"the server is listning on ${port}`)
})


