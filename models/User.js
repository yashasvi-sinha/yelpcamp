const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const UserSchemaNewCampgrounds = new mongoose.Schema({
    campName:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    imageUrl:{
        type:String,
        required:true
    },
    description:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const UserModel = mongoose.model('User', UserSchema)
const NewUserModel = mongoose.model('newCampgrounds', UserSchemaNewCampgrounds)

module.exports = UserModel
module.exports = NewUserModel