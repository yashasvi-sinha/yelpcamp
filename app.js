const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/User')
const handle=require("express-handlebars")
const { static } = require('express')



const app = express()
app.use(express.static('public'))
app.engine('hbs', handle({extname:'hbs'}));
app.set('view engine', 'hbs');

// THis is done because of its showing copied DB_URL

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

app.get("/home",(req,res)=>{
    res.render('landing-page.hbs')
})

app.get("/routing",(req,res)=>{
    res.send('routed ')
})



app.listen(5000, () => console.log("Server Started"))
