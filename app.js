const express = require('express')
const app = express()
const expHbs = require('express-handlebars')

app.engine('hbs', expHbs({ extname:'hbs' }))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.render('home')
})

app.listen(5000, () => {
    console.log("Server Started")
})