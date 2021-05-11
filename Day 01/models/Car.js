const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
    model:String,
    price:String,
    customer: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    }
})

const CarModel = mongoose.model('Car', CarSchema)
 
module.exports = CarModel