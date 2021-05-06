const express = require('express')
const exphbs  = require('express-handlebars')
// const mongoose = require('mongoose')
// const User = require('./models/User')

const app = express()

app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: false
}))
app.set('view engine', '.hbs')

app.use(express.static("style"))
app.use(express.static("script"))

app.get("/", (req, res) => {
    console.log("Landing page Started")
    res.render("landingPage")
})
// const DB_URL = "mongodb+srv://express-attainu:qAmxNDPVztn2rSUG@cluster0.bg4zd.mongodb.net/yelpcamp-attainu?retryWrites=true&w=majority"

// mongoose.connect(DB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// }, async (err) => {
//     if (err) throw err

//     console.log('Connected')

//     // const instance = new User()

//     const newUser = {
//         email: "ASDASD",
//         password: "asdasdasd"
//     }

//     const user = new User(newUser)

//     const result = await user.save()

//     console.log(result)

// })




app.listen(5000, () => console.log("Server Started"))
