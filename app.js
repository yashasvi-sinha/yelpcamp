require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const expHbs = require('express-handlebars')
const bcrypt = require('bcrypt')

const app = express()

//Routers
const userRouter = require('./routes/user')
const { seedDB } = require('./seed')
const CampgroundModel = require('./models/Campground')
const CommentModel = require('./models/Comment')


const { DATABASE_URL } = process.env

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
app.engine('hbs', expHbs({ extname: 'hbs' }))
app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


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

app.get('/campground/:campgroundId', async (req, res) => {

    const campground = await CampgroundModel.findById(req.params.campgroundId)


    res.render
})

// How to achieve relationships in MongoDb
app.post('/campground', async (req, res) => {

    const campgroundDoc = await CampgroundModel.create({ name: req.body.name })

    const result = await campgroundDoc.save()

    res.json(result)
})


app.post('/comment/add/:campgroundId/', async (req, res) => {

    // // 1. Get the document , 2. Push to that doc, 3. send this doc back to the database
    // // find

    // const doc = await CampgroundModel.findById(req.params.campgroundId)
    // console.log(doc)

    // doc.comments.push(req.body.text)

    // // await CampgroundModel.updateOne({})
    // // const result = await CampgroundModel.updateOne({id: req.params.campgroundId})
    // await doc.save()

    // // 2. Directly send 

    // // const result = await CampgroundModel.findByIdAndUpdate(req.params.campgroundId, {comments: [req.body.text]})

    // res.json(result)

    const foundCampgroundDoc = await CampgroundModel.findById(req.params.campgroundId)

    const commentDoc = await CommentModel.create(req.body)

    commentDoc.campground = foundCampgroundDoc

    const commentResult = await commentDoc.save()
    console.log("commentResult View", commentResult)
    console.log("Main Changes")


    foundCampgroundDoc.comments.push(commentDoc)

    const campgroundResult = await foundCampgroundDoc.save()
    console.log("campgroundResult", campgroundResult)

    res.json({commentResult, campgroundResult})

})

app.listen(5000, () => console.log("Server Started"))
