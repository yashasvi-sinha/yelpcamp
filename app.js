const express = require('express');
const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const expHbs = require('express-handlebars');
const User = require('./models/User');
const Campground = require('./models/campgroundModel');
const fileupload = require('express-fileupload');
const dotenv = require('dotenv');

const app = express();

dotenv.config({ path: './.env' });

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Connected to database'));

const store = new MongoDBSession({
  uri: DB,
  collection: 'my-sessions',
});

app.engine('hbs', expHbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: 'This is a secret',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

const isAuth = (req, res, next) => {
  if (req.session.isAuth) {
    next();
  } else {
    res.redirect('/login');
  }
};

app.use(express.json());
app.use(fileupload());

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/campgrounds', (req, res) => {
  res.render('campgrounds');
});

app.get('/campgrounds/new', isAuth, (req, res) => {
  res.render('campgrounds-form');
});

app.post('/campgrounds/new', async (req, res) => {
  try {
    console.log(req.files);
    let data = {
      name: req.body.name,
      price: req.body.price,
      location: req.body.location,
      image: req.files.image.name,
      description: req.body.description,
    };

    const newCampground = await Campground.create(data);
    res.redirect('/campgrounds');
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
});

app.get('/signup', (req, res) => {
  req.session.isAuthorized = true;
  res.render('signup');
});

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user) {
    return res.redirect('/signup');
  }

  const hashedPsw = await bcrypt.hash(password, 12);

  user = new User({
    name,
    email,
    password: hashedPsw,
  });

  await user.save();

  res.redirect('/login');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.redirect('/login');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.redirect('/login');
  }

  req.session.isAuth = true;

  res.redirect('/campgrounds/new');
});

app.listen(process.env.PORT, () => console.log('Server Started'));
