const mongoose = require('mongoose')

const   CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    cars: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Car'
    }]
})

const CustomerModel = mongoose.model('Customer',    CustomerSchema)

module.exports = CustomerModel