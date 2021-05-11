require('dotenv').config()
const mongoose = require('mongoose')
const { car1, car2, car3, car4 } = require('./entities/cars')
const finaloutput = require('./middlewares/consoledisplay')
const { createnewcars } = require('./middlewares/newcars')
const seed = require('./middlewares/seed')
const user1 = require('./middlewares/user1')
const user2 = require('./middlewares/user2')
const CarModel = require('./models/Car')
const { DATABASE_URL } = process.env
const CustomerModel = require('./models/Customer')

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if (err)throw err
    console.log('Connected')
})

// user1()
// user2()
// seed()

finaloutput(user1(), user2())
// console.log(first,second)