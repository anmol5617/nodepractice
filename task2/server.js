const mongoose=require('mongoose')
const dotenv=require('dotenv')
const app=require('./app')

dotenv.config({path:'./.env'})

const DB=process.env.DATABASE.replace('<db_password>',process.env.DB_PASSWORD)
mongoose.connect(DB,{
    
}).then(()=> console.log("db is connected succesfully "))

app.listen(process.env.PORT,(req,res)=>{
    console.log(`the server listening on port ${process.env.PORT}`)
})
