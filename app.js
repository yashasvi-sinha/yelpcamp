require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const expHbs = require('express-handlebars')
const bcrypt = require('bcrypt')

const app = express()

//Routers
const userRouter = require('./routes/user')
const { seedDB } = require('./seed')


const {DATABASE_URL} = process.env

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if (err) throw err

    // seedDB()

    console.log('Connected')
})

//Handle Bars Middleware
app.engine('hbs', expHbs({ extname: 'hbs'  }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({extended: false}))


app.use('/user', userRouter)


app.get('/', async (req, res) => {

    const email = "abc@123.com"
    const password = "123"

    const pass2 = "123"

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)
    console.log(salt)
    console.log(hashedPassword)


    // const salt2 = await bcrypt.genSalt(10)
    // const hashedPassword2 = await bcrypt.hash(pass2, salt2)

    // console.log(salt2)
    // console.log(hashedPassword2)


    //login
    //get the user from database
    const user = {
        email: "abc@123.com",
        password: hashedPassword //coming from db
    }


    const isMatching = await bcrypt.compare(password, user.password)

    console.log(isMatching)
    res.send("Welcome To YelpCamp")
})







app.listen(5000, () => console.log("Server Started"))
