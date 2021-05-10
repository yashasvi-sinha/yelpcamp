const express = require('express')
const expHbs = require('express-handlebars')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.engine('hbs', expHbs({extname:'hbs'}))
app.set('view engine', "hbs")

app.get("/", (req, res) => {
    res.render('page')
})
app.listen(3000)