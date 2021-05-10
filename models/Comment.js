const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    text: {
        type: String
    },
    email: String,
    campground: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campground'
    }
})

const CommentModel = mongoose.model('Comment', CommentSchema)

module.exports = CommentModel