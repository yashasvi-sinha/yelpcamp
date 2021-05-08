require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const expHbs = require('express-handlebars')
const session = require('express-session')
const fileUpload = require('express-fileupload')
const bcrypt = require('bcrypt')
const app = express()
const userRouter = require('./routes/user')
app.use(express.static('public'))
app.use(session({
    secret: "APPLE",
    resave: false,
    saveUninitialized: false
}))
const {DATABASE_URL} = process.env

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, async (err) => {
    if (err) throw err
    console.log('Connected')
})

app.use(fileUpload())
app.use(express.urlencoded({extended:true}))
app.engine('hbs', expHbs({ extname: 'hbs'  }))
app.set('view engine', 'hbs')

app.use("", userRouter)

app.get("/", (req, res) => {
    res.render('signup')
})
app.listen(3000)