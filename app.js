require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const expHbs = require('express-handlebars')

const app = express()

//Routers
const userRouter = require('./routes/user')


const {DATABASE_URL} = process.env

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if (err) throw err

    console.log('Connected')
})

//Handle Bars Middleware
app.engine('hbs', expHbs({ extname: 'hbs'  }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({extended: false}))


app.use('/user', userRouter)


app.get('/', async (req, res) => {
    res.send("Welcome To YelpCamp")
})

app.listen(5000, () => console.log("Server Started"))
