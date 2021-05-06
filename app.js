
const express = require('express');
const mongoose = require('mongoose');
const expHbs = require('express-handlebars');
const User = require('./models/User');
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const expHbs = require('express-handlebars')

const app = express();

const DB_URL =
  'mongodb+srv://express-attainu:qAmxNDPVztn2rSUG@cluster0.bg4zd.mongodb.net/yelpcamp-attainu?retryWrites=true&w=majority';

mongoose.connect(
  DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  async err => {
    if (err) throw err;

    console.log('Connected');
  }
);
// const instance = new User()

// const newUser = {
//   email: 'ASDASD',
//   password: 'asdasdasd',
// };

//     const user = new User(newUser);

//     const result = await user.save();

//     console.log(result);
//   }
// );

app.engine('hbs', expHbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(5000, () => console.log('Server Started'));
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
