const express = require('express')
const mongoose = require('mongoose')

const app = express()
const orderRoute = require('./routes/orderRoutes')
const userRoute = require('./routes/usersRoutes')
const empRoute = require('./routes/empRoutes')
const dotenv = require('dotenv')

dotenv.config({ path: './.env' })

const DB = process.env.DATABASE.replace('<DBPASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {

}).then(con => {
    console.log('db is connected successfulllyyyyy.......')
}
)

app.use(express.json())


app.use('/api/e1/emps', empRoute)
app.use('/api/o1/orders', orderRoute)
app.use('/api/u1/users', userRoute)




app.listen(process.env.PORT, () => {
    console.log(`app is listening on ${process.env.PORT} `)
})
