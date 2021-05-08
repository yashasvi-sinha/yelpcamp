const mongoose = require('mongoose');

const campgroundSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A campground must have a name'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'A price must be included'],
  },
  location: {
    type: String,
    required: [true, 'A location is must for campground'],
    trim: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Campground = mongoose.model('Campground', campgroundSchema);

module.exports = Campground;
