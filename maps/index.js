const express = require('express')
const app = express()
const expHbs = require('express-handlebars')
app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))
app.engine('hbs', expHbs({extname:'hbs'}))
app.set('view engine', 'hbs')
app.get('/',(req, res) => {
    res.render('home')
})

app.listen(3000)