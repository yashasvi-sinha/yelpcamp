require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const expHbs = require('express-handlebars')
const multer  = require('multer')

const userRouter = require('./routes/user')

const upload = multer({ dest: 'uploads/' })

const app = express()

app.engine('hbs', expHbs({ extname: 'hbs'  }))
app.set('view engine', 'hbs')


app.use(express.static('images'))
app.use(express.static('css'))

app.use(express.urlencoded({extended: false}))


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


app.use('/', userRouter)



app.listen(3000, (res, req) => console.log('Server Started'))



