const express = require('express')
const exphbs  = require('express-handlebars');
const port = process.env.PORT || 3000
const app = express()

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(express.static('scss'))
app.use(express.static('js'))
app.use(express.urlencoded({extended: true}))


app.get('/', function(req, res) {
    res.render('home')  
})

app.listen(port, () => console.log('Server Started'))