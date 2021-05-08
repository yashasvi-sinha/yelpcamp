const mongoose = require('mongoose')

const CampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    location: {
        type:String,
        required:true
    },
    image: {
        type:String
    },
    description:{
        type:String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const CampModel = mongoose.model('Campground', CampSchema)

module.exports = CampModel