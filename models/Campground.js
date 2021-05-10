const mongoose = require('mongoose')

const CampgroundSchema = new mongoose.Schema({
    name: {
        type: String
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

const CampgroundModel = mongoose.model('Campground', CampgroundSchema)

module.exports = CampgroundModel