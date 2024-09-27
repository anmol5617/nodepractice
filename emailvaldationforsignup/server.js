
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config({path:('./.env')})
const app=require('./app')

const DB= process.env.DATABASE.replace('<db_password>',process.env.DB_PASSWORD)
 mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
 }).then(()=>console.log('db is connected successfully'))
 

app.listen(process.env.PORT,(req,res)=>{
    console.log(`the server is listning on ${process.env.PORT}`)
})